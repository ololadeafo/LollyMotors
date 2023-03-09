from django.urls import path
from .views import (
    api_list_technicians, 
    api_list_appointments, 
    api_show_appointment,
    api_service_history, 
    
)

urlpatterns = [
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:pk>/", api_show_appointment, name="api_show_appointment"),
    path("appointments/history/", api_service_history, name="api_service_history")
]
