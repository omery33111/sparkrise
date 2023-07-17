from django.db import models



class Callback(models.Model):
    first_name = models.CharField(max_length = 100)
    last_name = models.CharField(max_length = 100)
    location = models.CharField(max_length = 100)
    phone_number = models.CharField(max_length = 20)
    email = models.CharField(max_length = 40)
    message = models.TextField(default = ".ללא הודעה", null = True, blank = True, max_length = 350)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

