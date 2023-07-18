from django.urls import path
from . import views



urlpatterns = [
    path('post_month/', views.post_month),
    
    path('get_month/', views.get_month),

    path('single_month/<int:pk>/', views.single_month),

]
