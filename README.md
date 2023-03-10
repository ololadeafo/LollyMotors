# CarCar

Team:

* Person 1 - Which microservice?
* Ross Appelbaum - Sales
* Ololade Afolabi - Services
* Person 2 - Which microservice?

## Design

## Service microservice

The Sevice microservice keeps a record of service appointments based on the owner and their automobile. It also handles the creation of a Technician who can then be assigned to a specific appointment.
I created the Appointment model, Technician model, and AutomobileVO model.

The Appointment model has the customer_name, vip, vin, date, time, reason, finished, and technician. The appointment model has the appointment list that lists all appointments, the appointment form allows a customer to create an appointment using their name, vin of their automobile, date of appointment, time of appointment, reason for the appointment, and assign a technician. the appointment history shows the customer's appointment history. There is a search button included that allows a customer retrieve the information of a specific appointment using the vin number entered.

The Technician model has the name and employee number. The technician model has the Technician form that allows the creation of a technician using their name and unique employee number, and then they can be assigned to a service appointment.

The AutomobileVO model stores the data needed from the inventory service automobile model. 
The poller polls the data needed from the inventory database, and then assign it to the AutomobileVO model.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
