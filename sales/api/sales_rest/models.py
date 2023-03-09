from django.db import models

# Create your models here.


class AutomobileVO(models.Model):
    model = models.CharField(max_length=200)
    vin = models.CharField(max_length=200)
    year = models.IntegerField()
    import_href = models.CharField(max_length=200, unique=True)
    is_sold = models.BooleanField(default=False)
class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField()

class PotentialCustomer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=100)

class SaleRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sale_records",
        on_delete=models.CASCADE,
    )
    salesperson = models.ForeignKey(
        SalesPerson,
        related_name="sale_records",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        PotentialCustomer,
        related_name="sale_records",
        on_delete=models.CASCADE,
    )
    price = models.CharField(max_length=50)
