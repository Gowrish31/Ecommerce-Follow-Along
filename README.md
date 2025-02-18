# Ecommerce-Follow-Along\

## Milestone 1: Project Overview

This project is part of a hands-on MERN stack series to build an e-commerce application.
Features are:
1)Authentication: Secure login, signup, and logout.
2)Product Management: Display products with images, descriptions, and prices.
3)Orders Page: User-specific order history.
4)Payment Gateway: Secure transactions and order confirmation.
#Technologies
MongoDB for data storage , Express.js for backend APIs , React.js for the user interface , Node.js for server-side logic.

# Ecommerce-Follow-Along\

## Milestone 2: 
In this milestone we created structure of the project by  setting  up the frontend and backend.
- First creating a structured folder for the project
- Then Setting up  React app for the frontend and a Node.js server for the backend and installing express,mongoose,nodemon and cors
- Implemented  Tailwind CSS for styling.
- Then created Login Page for authorization .

## Milestone 3:
-Setting  up the node.js server to handle api requests.

-Setting up  folders for  backend code 

-Connecting  application  the to MongoDB

-Connecting  the database and server

-Create a error handler
## Milestone 4:
- Creating User Model :-A model is like a detailed map or plan,designing how a user’s data (like name, email, and password) will look in the database.
- Creating User Controller for handelling all the actions such as  adding a new user , updating their info and even accesing data.
- Finnaly Setting up Multer for file uploads 

## Milestone 5:
In this assignment we created the frontend UI for users to register by filling out their details

created a sign up page which included:
-Name,

-Email,

-Password

And implemented Form validation,


## Milestone 6:
1) Generated a JWT token for the user at signup.
2) Created a verification link with the token.
3) Configured Nodemailer to send the email with the verification link.
4) Created an endpoint to verify the token and activate the user.

## Milestone 7
 - In this assignment we created two routes , one for signup and login page
 -  Signup:
   1. requested  the data sent by the user
   2. if user is  present in the DB , login success, else  Create a user and store the name, email, password in DB
     
- For Login:
   1. Take the data from  req.body
   2. Checking if the user entry is present in DB .
      1. if present  create a token and send that as cookies 
      2. else return saying Signup first
   




## Milestone 6:
1) Generated a JWT token for the user at signup.
2) Created a verification link with the token.
3) Configured Nodemailer to send the email with the verification link.
4) Created an endpoint to verify the token and activate the user.

## Milestone 7
 - In this assignment we created two routes , one for signup and login page
 -  Signup:
   1. requested  the data sent by the user
   2. if user is  present in the DB , login success, else  Create a user and store the name, email, password in DB
     
- For Login:
   1. Take the data from  req.body
   2. Checking if the user entry is present in DB .
      1. if present  create a token and send that as cookies 
      2. else return saying Signup first
   

## Milestone 8
-Added a Card Component.
-Displayed all products using dummy data on the Home Page.

## Milestone 9
-Created a Product Entry Form.
-Used form data to send information through a network call.

## Milestone 10
-Created a Product Schema.
-Built an endpoint to save data into the database
-Integrated Cloudinary and Multer for file handling


## Milestone 11
- writing the get endpoint and fetch data from the database.
- tested using postman 
-added new route 

## Milestone 12
- we display all the items or the products in a better structured way
-we fetch the products using getproducts function in Homepage.jsx
-finnaly we display in frontend


## Milestone 13
-we create a update button in backend in card.jsx and PUT route for updateing
-we create a page for auto filling in frontend for the updated data [id] except images 
-In frontend  the input boxes is filled with data
- finnaly fetch data from backend and once we have data 


## Milestone 14
-we create a delete button in backend in card.jsx 
-connected a DELETE route in the backend
-Delete button at the frontend with functionality to delete from the database.


## Milestone 15
-In this milestone we created Navbar.jsx in navbar for frontend .

## Milestone 16
-In this Milestone we added Single Page product Details
-Then we created Image Modal Component


## Milestone 17
1. added Cart Schema,
2. added cart route
3. added Cart Controller [get and addToCart]

## MileStone 18
1.added  Get Cart Data Route

## Milestone 19
1. Added Cart UI
2. Fetched Cart Details of the User 

## milestone 20
1. Added UI for profile route
2. created route for user data

## milestone 21
-created a new component address card
-added address card code in adresscard.jsx

## milestone 22
-added backend endpoint for address

## milestone 23
-added checkpoint button for the cart

## Milestone24 - Created Order Confirmation Page
1. Created a page to check the products which were already added to cart.

## Milestone 25 - Added Endpoint for receiving products details.
1. Created a product model/schema for storing the data of the items which are to be orderd.
2. Created a product controller for handling the porcess of checking if the products exists or not.

## Milestone 26 - Added Endpoint for Receiving User Mails.
1.  Created an user endpoint for receving mails from the user's end.
2. Using the id, all the orders placed from the user's side can be fetched.

## Milestone 27 - Created Orders Page.
1. Created an 'Orders' page to display all the user's orders.

## Milestone 28 - Created Cancel Button.
1. Created a cancel button for every order in the user's order page.
2. Created a backend endpoint to handle deleting the order.

## Milestone 29 & 30 - Integrated Payment Gateway.
1. A Razorpay account was created, and access to the Razorpay Developer .  
2. When clicked on the confirm order button, the payment gateway would open and allow the user to make an online payment .

### Milestone 31 - Implemented Global State Management.
1. Use Redux to store and manage the user's email across the application.  
2. Ensure components can access and update global state efficiently without prop drilling.  

