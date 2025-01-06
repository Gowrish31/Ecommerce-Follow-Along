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

Adding form validation to ensure users input valid data

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
