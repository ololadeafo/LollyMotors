from django.db import models


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, null=True)
    vin = models.CharField(max_length=17)

    def __str__(self):
        return self.vin

class Technician(models.Model):
    name = models.CharField(max_length=300)
    employee_number = models.PositiveIntegerField(null=True, unique=True)

    def __str__(self):
        return self.name
    

class Appointment(models.Model):
    customer_name = models.CharField(max_length=200)
    vip = models.BooleanField(default=False)
    vin = models.CharField(max_length=300)
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    reason = models.TextField()
    finished = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"{self.customer_name} {self.vin}"

