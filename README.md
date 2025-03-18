# Project Milestones

## **Milestone 1: Project Overview**
- **Authentication**: Implemented login, logout, and signup functionality.
- **Product Page**: Displays all available products.
- **Orders Page**: Shows orders for each user.
- **Payment Gateway**: Integrated for secure transactions.

## **Milestone 2: Backend and Frontend Setup**
- Created a `frontend` folder, initialized a React app, and installed dependencies.
- Configured **TailwindCSS** using **PostCSS**.
- Created `Authorization` folder containing:
  - `Login` Page
  - `Signup` Page
- Created a `backend` folder and installed:
  - Express
  - Mongoose
  - Nodemon
  - CORS

## **Milestone 3: Server and Database Setup**
- Set up **MongoDB Atlas** and **Express** server.
- Configured server to listen on a designated port.
- Added an **error handling** folder for debugging.

## **Milestone 4: User Model & File Upload**
- Created **User Model** to define user data structure.
- Created **User Controller** to handle user-related operations.
- Configured **Multer** for file uploads.

## **Milestone 5: Signup and Navigation**
- Completed signup page.
- Linked signup page to login page for easy navigation.

## **Milestone 6: User Activation & Email Verification**
- Implemented **JWT Token** for user activation.
- Sent activation links via **Nodemailer**.
- Created an endpoint to verify users.

## **Milestone 7: Password Encryption & Authentication**
- Used **bcrypt** to hash passwords before storing them.
- Created an endpoint to fetch user data based on email/username.
- Validated user credentials using bcrypt.

## **Milestone 8: Product Display**
- Created **Card Component**.
- Displayed products with dummy data on the **Home Page**.

## **Milestone 9: Product Entry Form**
- Created a form for product entry.
- Used **FormData** to send data over network calls.

## **Milestone 10: Product Schema & Upload**
- Defined **Product Schema**.
- Created an endpoint to store product data in **MongoDB via Cloudinary & Multer**.

## **Milestone 11: Fetch Products API**
- Created an endpoint to fetch all products from the database.
- Sent data to the client.

## **Milestone 12: Fetching Products in Frontend**
- Used **Axios** to fetch product data from backend.
- Implemented **useEffect** to load products.
- Used **Card Component** to display product details.

## **Milestone 13: Product Update Feature**
- Backend: Added **PUT route** for updating products.
- Frontend: Created a page for editing product details.

## **Milestone 14: Delete Product Feature**
- Added **handleDelete** button.
- Created an endpoint to delete individual products.

## **Milestone 15: Navbar & CORS Fix**
- Implemented **Navbar Component**.
- Resolved **CORS issues**.

## **Milestone 16: Single Product Page & Image Modal**
- Created **Single Page Product Details**.
- Implemented **Image Modal Component**.

## **Milestone 17: Cart Functionality**
- Defined **Cart Schema**.
- Created **Cart Routes**.
- Built **Cart Controller** (get & addToCart functions).

## **Milestone 18: Fetch Cart Data**
- Implemented a backend route to fetch cart details.

## **Milestone 19: Cart UI & Data Fetching**
- Created a UI for the cart.
- Fetched user cart details from backend.

## **Milestone 20: User Profile Page**
- Added UI for **Profile Route**.
- Created backend route to fetch user details.

## **Milestone 21: Address Management**
- Created a page for adding address details (city, country, etc.).
- Backend endpoint to store address details.

## **Milestone 22: Store Address in User Profile**
- Created backend functionality to save address inside the user's profile.

## **Milestone 23: Address Selection Page & Orders Schema**
- Created **Select Address Page** in frontend.
- Defined **Order Schema** in backend.

## **Milestone 24: Order Confirmation Page**
- Created frontend page displaying **ordered products, selected address, and total price**.

## **Milestone 25: Place Order Backend Endpoint**
- Created backend route to handle order placement.

## **Milestone 26: Fetch User Orders**
- Backend route to fetch all orders of a user.

## **Milestone 27: User Orders Page**
- Created frontend page displaying user orders.

## **Milestone 28: Order Cancellation Feature**
- Added **Cancel Order Button** in **My Orders**.
- Created a backend endpoint to handle order cancellations.

## **Milestone 29: Payment Integration**
- Added **Razorpay API** for online payments.

## **Milestone 30: Razorpay Implementation**
- Completed **online payment** integration.

## **Milestone 31: Global State Management**
- Configured **Redux Store** with `userReducer`.
- Created `setEmail` function in **userActions.js** to manage email state.

## **Milestone 32: Storing Email in Global State**
- Used **Dispatch** method to store email in global state.
- Used **useSelector** to access email in different pages.

## **Milestone 33: JWT Token & Cookies**
- Generated **JWT Token**.
- Created a **cookie** to store the token.

## **Milestone 34: JWT Authentication**
- Extracted **JWT Token** from cookies.
- Sent token to the server for validation.

## **Milestone 35: Deployment**
- **Deployed Frontend**.
- **Deployed Backend**.

---
