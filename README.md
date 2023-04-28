# shop_backend_project (BNTA)


## **_Collaborators_**

- GitHub: [Kelly Wong](https://github.com/KKLW97)
- GitHub: [Theo Lloyd](https://github.com/theollo)
- GitHub: [Subrina](https://github.com/Subrina7)
- GitHub: [Fiona Eshun](https://github.com/Fiona2223)

<br />

## **TABLE OF CONTENTS** 📖

> 1. Project Overview
> 2. Project Aim
> 3. Technologies
> 4. Dependencies
> 5. Diagrams
> 6. The API
> 7. Challenges
> 8. Future

### **_1. Project Overview_**

Our team took a keen interest in creating an e-commerce shop for selling luxury vehicles. The team integrated API functionality which allow software applications to communicate with each other and share data. This task helped the teamm encompass a range of learning experience and eagerness to extend our ideas in the future.
<br />

### **_2. Project Aim_**

* To create a basic working shop which contains the following:
* add/remove products
* add/remove customers
* A database of customers, products and orders
* Updating customer and product details
* Display all products
* Display products by ID
* Function to allow for discounts to select customers
* Creating a function to stop sold items being shown to customers

### **_3. Dependencies_**
* Spring Build and Dependencies:
* Project type: Maven
* Spring Version: 3.0.6
* Java Version: 17
* Dependencies
* DevTools
* Web
* PostgreSQL
* JPA

### **_4. Technologies_**:
* IntelliJ
* Postman
* Postico
* PostgreSQL

##### Installation Guide:
* Create a local database for the shop called shop_db. In the terminal run: createdb shop_db
* In resources.application.properties, copy the following code :

spring.datasource.url=jdbc:postgresql://localhost:5432/shop_db
spring.datasource.username=
spring.datasource.password=
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.properties.hibernate.enable_lazy_load_no_trans=true


### **_5. Diagram_**

## UML DIAGRAM
<img width="1229" alt="Screenshot 2023-04-28 at 10 31 18" src="https://user-images.githubusercontent.com/126800144/235114091-e5649a80-b00b-4ed5-93ad-299f6b14b881.png">

## ERD DIAGRAM

<img width="748" alt="Screenshot 2023-04-28 at 10 33 48" src="https://user-images.githubusercontent.com/126800144/235114294-53bbc666-ada9-4b89-b640-bad5034faba8.png">

### **_6. API_**:

### Customer Controller
| Route Name             | Request Type | RequestBody                      | Request Path              |
|------------------------|--------|----------------------------------|---------------------------|
| `displayAllCustomers`  | GET    | null                             | `/customers`                    |
| `displayCustomerById`  | GET    | null                             | `/customers/{customerId}`           |
| `addNewCustomer`       | POST   | (Id, name, email, product)       | `/customers/`     |
| `updateCustomer`       | PUT    | (Id, name, email, product)        | `/customers/{customerId} `          |
| `deleteCustomer`           | DELETE | null                             |` /customers/{customerId} `                  


### Product Controller
| Route Name             | Request Type | RequestBody                      | Request Path              |
|------------------------|--------|----------------------------------|---------------------------|
| `displayAllProduct`  | GET    | null                             | `/products`                    |
| `displayProductById`  | GET    | null                             | `/products/{productId}`           |
| `displayProductByColour`  | GET    | null                             | `/products/{colour}`           |
| `displayProductByCategory`  | GET    | null                             | `/products/{category}`           |
| `addNewProduct`       | POST   | (name, category, colour, price, customerId{"null"})       | `/products/`     |
| `updateProduct`       | PUT    | (nname, category, colour, price, customerId{"null"})        | `/products/{productId} `          |
| `deleteProduct`           | DELETE | null                             |` /products/{productId} `                  














### **_7.Challenges_**:

### **_8. Future_**:


