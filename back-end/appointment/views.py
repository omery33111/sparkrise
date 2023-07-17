from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import AppointmentSerializer



@api_view(['POST'])
def post_appointment(request):
    if request.method == 'POST':
        serializer = AppointmentSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = 201)
        return Response(serializer.errors, status = 400)
