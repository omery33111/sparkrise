from django.db import models
from django.utils import timezone



class Scheduler(models.Model):
    month = models.CharField(max_length = 20)
    year = models.IntegerField(null = False)
    days = models.IntegerField(null = False)

    def __str__(self):
        return self.month
