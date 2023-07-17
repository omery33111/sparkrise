from datetime import timedelta, datetime
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Scheduler
from .serializers import SchedulerSerializer

import calendar



@api_view(['POST'])
def post_month(request):
    if request.method == 'POST':
        current_date = datetime.now()
        current_month = current_date.month
        current_year = current_date.year
        days_in_month = (current_date.replace(day = 1) + timedelta(days = 32)).replace(day = 1) - timedelta(days=1)

        scheduler_data = {
            'month': current_month,
            'year': current_year,
            'days': days_in_month.day
        }
        
        # Delete the last scheduler record
        last_scheduler = Scheduler.objects.last()
        if last_scheduler:
            last_scheduler.delete()
        
        serializer = SchedulerSerializer(data=scheduler_data)

        if serializer.is_valid():
            scheduler = serializer.save()

            # Convert month number to month name
            month_name = calendar.month_name[current_month]
            scheduler.month = month_name
            scheduler.save()

            # Calculate next execution time
            next_execution = current_date + timedelta(days=2)
            scheduler_date = datetime(year=next_execution.year, month=next_execution.month, day=next_execution.day)
            scheduler_time = datetime.time(next_execution)
            scheduler.schedule_time = datetime.combine(scheduler_date, scheduler_time)
            scheduler.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_month(request):
    if request.method == 'GET':
        Schedulers = Scheduler.objects.all()
        serializer = SchedulerSerializer(Schedulers, many = True)
        return Response(serializer.data)
