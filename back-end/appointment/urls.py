from django.urls import path
from . import views



urlpatterns = [
    path('post_appointment/', views.post_appointment),
]
