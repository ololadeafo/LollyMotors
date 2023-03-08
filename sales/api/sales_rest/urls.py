from django.urls import path
from .views import api_salesperson_list, api_customer_list, api_salerecord_list

urlpatterns = [
    path("salesperson/", api_salesperson_list, name="api_salesperson_list"),
    path("customer/", api_customer_list, name="api_customer_list"),
    path("salerecord/", api_salerecord_list, name="api_salerecord_list"),
]
