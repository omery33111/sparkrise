from django.shortcuts import render

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Scheduler
from .serializers import SchedulerSerializer



@api_view(['POST'])
def post_scheduler(request):
    if request.method == 'POST':
        serializer = SchedulerSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def get_scheduler(request):
    if request.method == 'GET':
        Schedulers = Scheduler.objects.all()
        serializer = SchedulerSerializer(Schedulers, many=True)
        return Response(serializer.data)
    


@api_view(["GET"])
def get_month(request, pk = -1):
    if request.method == "GET":
        month = Scheduler.objects.get(pk = pk)
        serializer = SchedulerSerializer(month)
        return Response(serializer.data, status = status.HTTP_200_OK)
    


@api_view(['DELETE'])
def delete_scheduler(request, pk = -1):
    Schedule = Scheduler.objects.get(pk = pk)
    Schedule.delete()
    return Response(status = status.HTTP_204_NO_CONTENT)
