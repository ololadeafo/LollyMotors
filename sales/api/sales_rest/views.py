from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import SalesPerson, PotentialCustomer, AutomobileVO, SaleRecord
from .encoders import SalesPersonEncoder, CustomerEncoder, SaleRecordEncoder


@require_http_methods(["GET", "POST"])
def api_salesperson_list(request):
    if request.method=="GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder = SalesPersonEncoder,
        )
    else:
            content = json.loads(request.body)
            salesperson = SalesPerson.objects.create(**content)

    return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_customer_list(request):
    if request.method=="GET":
        customer = PotentialCustomer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder = CustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = PotentialCustomer.objects.create(**content)

    return JsonResponse(
        customer,
        encoder=CustomerEncoder,
        safe=False,
    )

@require_http_methods(["GET", "POST"])
def api_salerecord_list(request):
    if request.method == "GET":
        sales = SaleRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder = SaleRecordEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                    {"message": "Invalid automobile VIN"},
                    status=400
                )
        try:
            name = content["salesperson"]
            salesperson = SalesPerson.objects.get(name=name)
            content["salesperson"] = salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid employee name"},
                status=400,
            )
        try:
            name = content["customer"]
            customer = PotentialCustomer.objects.get(name=name)
            content["customer"] = customer
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer name"},
                status=400
            )
        sale = SaleRecord.objects.create(**content)


        return JsonResponse(
            sale,
            encoder=SaleRecordEncoder,
            safe=False
        )
