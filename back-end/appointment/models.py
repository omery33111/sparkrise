from django.db import models



class Appointment(models.Model):
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    time = models.CharField(max_length = 20)
    date = models.CharField(max_length = 20)
    message = models.CharField(max_length = 350, null = True, blank = True, default = '.ללא הודעה')

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.date} {self.time}'
