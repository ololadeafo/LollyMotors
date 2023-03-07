from django.contrib import admin
from .models import SaleRecord, SalesPerson, PotentialCustomer

# Register your models here.
@admin.register(SaleRecord)
class SaleRecordAdmin(admin.ModelAdmin):
    pass

@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass

@admin.register(PotentialCustomer)
class SalesPersonAdmin(admin.ModelAdmin):
    pass
