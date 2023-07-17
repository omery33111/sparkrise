from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, BasePermission
from rest_framework import status

from callback.models import Callback
from callback.serializers import CallbackSerializer

from appointment.models import Appointment
from appointment.serializers import AppointmentSerializer

from django.shortcuts import get_object_or_404



class IsStaff(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_staff
    

# -------------------- APPOINTMENTS CONTROL START -------------------- #

@permission_classes([IsAuthenticated, IsStaff])
@api_view(['GET'])
def get_appointments(request):
    if request.method == 'GET':
        appointments = Appointment.objects.all()
        serializer = AppointmentSerializer(appointments, many = True)
        return Response(serializer.data)
    

@permission_classes([IsAuthenticated, IsStaff])
@api_view(['GET'])
def get_appointment(request, pk = -1):
    try:
        appointment = Appointment.objects.get(pk = pk)
        serializer = AppointmentSerializer(appointment)
        return Response(serializer.data, status = status.HTTP_200_OK)
    except Appointment.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)


@permission_classes([IsAuthenticated, IsStaff])
@api_view(['PUT'])
def put_appointments(request, pk = -1):
    try:
        appointment = Appointment.objects.get(pk = pk)
    except Appointment.DoesNotExist:
        return Response(status = 404)

    serializer = AppointmentSerializer(appointment, data = request.data, partial = True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status = 400)


@permission_classes([IsAuthenticated, IsStaff])
@api_view(["DELETE"])
def delete_appointment(request, pk = -1):
    if request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(pk = pk)
            appointment.delete()
            return Response(status = status.HTTP_204_NO_CONTENT)
        except Appointment.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

# -------------------- APPOINTMENTS CONTROL END -------------------- #



# -------------------- CALLBACKS CONTROL START -------------------- #

@api_view(['GET'])
@permission_classes([IsAuthenticated, IsStaff])
def get_callback(request):
    if request.method == 'GET':
        callbacks = Callback.objects.all()
        serializer = CallbackSerializer(callbacks, many=True)
        return Response(serializer.data)


@permission_classes([IsAuthenticated, IsStaff])
@api_view(["DELETE"])
def delete_callback(request, pk = -1):
    if request.method == "DELETE":
        try:
            callback = Callback.objects.get(pk = pk)
            callback.delete()
            return Response(status = status.HTTP_204_NO_CONTENT)
        except Appointment.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)

# -------------------- CALLBACKS CONTROL END -------------------- #
    