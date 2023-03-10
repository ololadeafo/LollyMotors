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

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

My models, I tailored specifically to be able to do what I wanted to do with my views and what I wanted to do with my front end. My automobileVO has the model, vin, and year fields due to the fact that I felt that was the most relevant information to the car itself and the vin could be used as a unique identifier in the front end. Import_href I specifically put so I could work with the poller and is_sold is so I essentially wouldn't be able to sell a car that has already been sold. Salesperson and potential customer both have those fields because they again, were the most relevant fields to have in order to create and list a salesperson/customer, though in the end we didn't need a list page for the customer. Salerecord had to have a foreign key to automobile, salesperson, and customer as those were needed to create a salerecord. I grabbed the individual elements that I needed in the view in order to make the salerecord by including their encoders in my SaleRecordEncoder, which also added the benefit in giving me the ability to be able to manipulate the information as I needed to in the front end portion which really came in handy, especially on the Salesperson history page.
