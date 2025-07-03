🚀 Freelance Marketplace — Backend
This is the Node.js + Express + MongoDB backend API for the Freelance Marketplace project.
It handles user authentication, service listings, bookings, and email notifications.

🗂 Folder Structure
backend/
├── Controllers/
│   ├── authController.js
│   ├── serviceController.js
│   └── bookingController.js
├── Database/
│   └── dbConfig.js
├── Middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── Models/
│   ├── User.js
│   ├── Service.js
│   └── Booking.js
├── Routers/
│   ├── authRoute.js
│   ├── serviceRoute.js
│   └── bookingRoute.js
├── Utils/
│   └── mailer.js
├── server.js
├── .env
└── README.md

🌐 API Endpoints
| Method | Endpoint                    | Description                   |
| ------ | --------------------------- | ----------------------------- |
| POST   | `/api/auth/register`        | Register new user             |
| POST   | `/api/auth/login`           | Login and receive token       |
| POST   | `/api/service`              | Create a service (freelancer) |
| GET    | `/api/service`              | Get all services              |
| GET    | `/api/service/:id`          | Get single service details    |
| POST   | `/api/booking`              | Book a service                |
| GET    | `/api/booking/user/:userId` | Get all bookings of a user    |

🔐 Authentication
✅ All protected routes require Bearer token in headers:

Authorization: Bearer <your_jwt_token>
📧 Email Notifications
The Utils/mailer.js uses Nodemailer to send emails.

After booking confirmation, freelancer can be notified for further processing.

💻 Run Dev Server
npm run dev
🛠 Tech Stack
Node.js

Express

MongoDB + Mongoose

JWT

Nodemailer

dotenv

CORS

API Documentation : https://documenter.getpostman.com/view/44994873/2sB34bL42L



