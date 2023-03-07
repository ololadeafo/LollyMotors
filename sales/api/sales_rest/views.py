from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder
from .models import SalesPerson, PotentialCustomer, AutomobileVO, SaleRecord

# Create your views here.
class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name"
        "employee_number"
    ]






@require_http_methods(["GET", "POST"])
def api_create_salesperon(request):
    if request.method=="GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {"salesperson": salesperson},
            encoder = SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        salesperson = salesperson
