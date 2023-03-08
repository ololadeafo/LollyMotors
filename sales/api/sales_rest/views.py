from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import SalesPerson, PotentialCustomer, AutomobileVO, SaleRecord

# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "year",
        "model",
        "import_href"
    ]

class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
    ]

class CustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = [
        "name",
        "address",
        "phone_number",
    ]

class SaleRecordEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "price",
    ]
    def get_extra_data(self, o):
        return {
            "automobile": o.automobile.vin,
            "salesperson": o.salesperson.employee_number,
            "customer": o.customer.phone_number,
            }




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
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automotive vin"},
                status=400,
            )
        try:
            salesperson = SalesPerson.objects.get(employee_number=content["salesperson"])
            content["salesperson"] = salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid employee number"},
                status=400,
            )
        try:
            customer = PotentialCustomer.objects.get(phone_number=content["customer"])
            content["customer"] = customer
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid customer phone number"},
                status=400
            )
        sale = SaleRecord.objects.create(**content)


        return JsonResponse(
            sale,
            encoder=SaleRecordEncoder,
            safe=False
        )
