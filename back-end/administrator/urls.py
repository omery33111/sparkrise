from django.urls import path
from . import views



urlpatterns = [
    path('get_appointments/', views.get_appointments),
    path('get_appointment/<int:pk>/', views.get_appointment),
    path('put_appointment/<int:pk>/', views.put_appointments),
    path('delete_appointment/<int:pk>/', views.delete_appointment),

    path('get_callbacks/', views.get_callback),
    path('delete_callback/<int:pk>/', views.delete_callback),
]
