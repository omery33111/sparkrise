from django.urls import path
from . import views



urlpatterns = [
    path('post_scheduler/', views.post_scheduler),
    
    path('get_scheduler/', views.get_scheduler),

    path('delete_scheduler/<int:pk>/', views.delete_scheduler),

    path('get_month/<int:pk>/', views.get_month),
]
