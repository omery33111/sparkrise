from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import BasePermission

from .models import Appointment
from .serializers import AppointmentSerializer



class IsStaff(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_staff



@api_view(['POST'])
def post_appointment(request):
    if request.method == 'POST':
        serializer = AppointmentSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = 201)
        return Response(serializer.errors, status = 400)



@permission_classes([IsStaff])
@api_view(['GET'])
def get_appointments(request):
    if request.method == 'GET':
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many = True)
        return Response(serializer.data)
