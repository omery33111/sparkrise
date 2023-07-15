from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('authentication/', include('authentication.urls')),
    path('scheduler/', include('scheduler.urls')),
    path('callback/', include('callback.urls')),
]
