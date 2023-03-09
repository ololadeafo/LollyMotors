from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href", "vin"]

class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [ 
        "name", 
        "employee_number",
        ]

class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "customer_name", 
        "vip",
        "vin", 
        "technician", 
        "reason", 
        "date", 
        "time",
        "finished"
        ]
    encoders = {
        "technician": TechnicianListEncoder()
    }


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id", 
        "customer_name", 
        "vip", 
        "vin", 
        "technician", 
        "reason", 
        "date",
        "finished" 
        ]
    encoders = {
        "technician": TechnicianListEncoder()
    }