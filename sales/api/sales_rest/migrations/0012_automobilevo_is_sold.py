# Generated by Django 4.0.3 on 2023-03-09 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0011_alter_salesperson_employee_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='is_sold',
            field=models.BooleanField(default=False),
        ),
    ]
