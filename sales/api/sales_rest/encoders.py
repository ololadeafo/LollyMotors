from .models import AutomobileVO, SalesPerson, PotentialCustomer, SaleRecord
from  common.json import ModelEncoder


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
    encoders ={
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }
