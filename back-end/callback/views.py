from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import BasePermission

from .models import Callback
from .serializers import CallbackSerializer



class IsStaff(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_staff



@api_view(['POST'])
def post_callback(request):
    if request.method == 'POST':
        serializer = CallbackSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@permission_classes([IsStaff])
def get_callback(request):
    if request.method == 'GET':
        Schedulers = Callback.objects.all()
        serializer = CallbackSerializer(Schedulers, many=True)
        return Response(serializer.data)
