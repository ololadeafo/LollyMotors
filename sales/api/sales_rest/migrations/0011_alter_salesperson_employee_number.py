# Generated by Django 4.0.3 on 2023-03-09 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0010_alter_salesperson_employee_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesperson',
            name='employee_number',
            field=models.PositiveSmallIntegerField(default=1),
            preserve_default=False,
        ),
    ]
