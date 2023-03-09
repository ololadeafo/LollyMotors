from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods

from .encoders import TechnicianListEncoder, AppointmentListEncoder, AppointmentDetailEncoder
from .models import AutomobileVO, Technician, Appointment


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()

        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianListEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
            print(content)
            return JsonResponse(
                technician,
                encoder=TechnicianListEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Technician cannot be created"}
            )

    
@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()

        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.get(employee_number=content["technician"])
        content["technician"] = technician

        try:
            vin = AutomobileVO.objects.get(vin=content["vin"])
            content["vip"] = True
        except AutomobileVO.DoesNotExist:
            content["vip"] = False

        appointment = Appointment.objects.create(**content)

        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_appointment(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment, encoder=AppointmentDetailEncoder, safe=False
        )
    elif request.method == "PUT":
        content = json.loads(request.body)
        try:
            if "technician" in content:
                technician = Technician.objects.get(id=content["technician"])
                content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Technician does not exist"}
            )
        Appointment.objects.filter(id=pk).update(**content)
        appointment = Appointment.objects.get(id=pk)

        return JsonResponse(
            appointment, 
            encoder=AppointmentDetailEncoder, 
            safe=False,
        )
    else:
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )

@require_http_methods(["GET"])
def api_service_history(request):
    if request.method == "GET":
        appointments = Appointment.objects.filter(finished=True)
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
            safe=False,
        )



