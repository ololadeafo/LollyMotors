# CarCar

Team:

* Person 1 - Which microservice?
* Ross Appelbaum - Sales
* Ololade Afolabi - Services
* Person 2 - Which microservice?

## Design
https://excalidraw.com/#room=ab3043770cca810a8ac5,uSEJRLyEFUggB1_HUEgwNQ
Our bounded context and design is in this excalidraw
## Service microservice

The Sevice microservice keeps a record of service appointments based on the owner and their automobile. It also handles the creation of a Technician who can then be assigned to a specific appointment.
I created the Appointment model, Technician model, and AutomobileVO model.

The Appointment model has the customer_name, vip, vin, date, time, reason, finished, and technician which has a foreign key to Technician because you need the technician's name and employee number to be able to assign a technician to a service appointment. The appointment model has the appointment list that lists all appointments, the appointment form allows a customer to create an appointment using their name, vin of their automobile, date of appointment, time of appointment, reason for the appointment, and assign a technician. the appointment history shows the customer's appointment history. There is a search button included that allows a customer retrieve the information of a specific appointment using the vin number entered.

The Technician model has the name and employee number. The technician model has the Technician form that allows the creation of a technician using their name and unique employee number, and then they can be assigned to a service appointment.

The AutomobileVO model stores the data needed from the inventory service automobile model. 
The poller polls the data needed from the inventory database, and then assign it to the AutomobileVO model.

## Sales microservice

My models, I tailored specifically to be able to do what I wanted to do with my views and what I wanted to do with my front end. My automobileVO has the model, vin, and year fields due to the fact that I felt that was the most relevant information to the car itself and the vin could be used as a unique identifier in the front end. Import_href I specifically put so I could work with the poller and is_sold is so I essentially wouldn't be able to sell a car that has already been sold. Salesperson and potential customer both have those fields because they again, were the most relevant fields to have in order to create and list a salesperson/customer, though in the end we didn't need a list page for the customer. Salerecord had to have a foreign key to automobile, salesperson, and customer as those were needed to create a salerecord. I grabbed the individual elements that I needed in the view in order to make the salerecord by including their encoders in my SaleRecordEncoder, which also added the benefit in giving me the ability to be able to manipulate the information as I needed to in the front end portion which really came in handy, especially on the Salesperson history page.
