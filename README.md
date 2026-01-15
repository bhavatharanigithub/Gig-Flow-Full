# GigFlow - Freelance Marketplace Platform

A full-stack freelance marketplace platform where clients can post jobs (gigs) and freelancers can bid on them. Built with React, Node.js, Express, MongoDB, and Socket.io for real-time updates.

## 🚀 Features

### Core Features
- **User Authentication**: Secure sign-up and login with JWT tokens stored in HttpOnly cookies
- **Gig Management**: Create, browse, and search gigs with filtering capabilities
- **Bidding System**: Freelancers can submit bids with proposals and pricing
- **Hiring Logic**: Clients can hire freelancers with atomic transaction support
- **Real-time Notifications**: Socket.io integration for instant hire notifications

### Bonus Features
- **Transactional Integrity**: MongoDB transactions prevent race conditions during hiring
- **Real-time Updates**: Instant notifications when a freelancer is hired

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Socket.io Client
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Socket.io
- Bcryptjs
- Cookie Parser

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd proc
```

### 2. Backend Setup

```bash
cd gigflow-server
npm install
```

Create a `.env` file in the `gigflow-server` directory:
```env
MONGO_URI=mongodb://localhost:27017/gigflow
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
```

Start the backend server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd gigflow-frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
proc/
├── gigflow-server/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # MongoDB connection
│   │   ├── controllers/
│   │   │   ├── authController.js  # Authentication logic
│   │   │   ├── gigController.js  # Gig CRUD operations
│   │   │   └── bidController.js  # Bidding and hiring logic
│   │   ├── middleware/
│   │   │   └── authMiddleware.js  # JWT authentication middleware
│   │   ├── models/
│   │   │   ├── User.js            # User schema
│   │   │   ├── Gig.js             # Gig schema
│   │   │   └── Bid.js              # Bid schema
│   │   ├── routes/
│   │   │   ├── authRoutes.js      # Auth endpoints
│   │   │   ├── gigRoutes.js       # Gig endpoints
│   │   │   └── bidRoutes.js       # Bid endpoints
│   │   ├── utils/
│   │   │   └── generateToken.js   # JWT token generation
│   │   ├── server.js              # Express server setup
│   │   └── socket.js              # Socket.io configuration
│   └── package.json
│
└── gigflow-frontend/
    ├── src/
    │   ├── api/
    │   │   └── axios.js            # Axios configuration
    │   ├── components/
    │   │   └── Navbar.jsx          # Navigation component
    │   ├── pages/
    │   │   ├── FrontPage.jsx       # Landing page
    │   │   ├── Login.jsx           # Login page
    │   │   ├── Register.jsx       # Registration page
    │   │   ├── ClientDashboard.jsx # Client dashboard
    │   │   ├── FreelancerDashboard.jsx # Freelancer dashboard
    │   │   └── GigBids.jsx         # Bids management page
    │   ├── socket.js               # Socket.io client
    │   ├── App.jsx
    │   ├── main.jsx                # React entry point
    │   └── index.css               # Global styles
    └── package.json
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user (sets HttpOnly cookie)
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user (protected)

### Gigs
- `GET /api/gigs?search=<query>` - Get all open gigs (with optional search)
- `POST /api/gigs` - Create a new gig (protected)

### Bids
- `POST /api/bids` - Submit a bid on a gig (protected)
- `GET /api/bids/:gigId` - Get all bids for a specific gig (owner only, protected)
- `PATCH /api/bids/:bidId/hire` - Hire a freelancer (atomic transaction, protected)

## 🎯 Key Features Explained

### 1. Hiring Logic with Transactional Integrity
When a client hires a freelancer:
- The gig status changes from "open" to "assigned"
- The chosen bid status becomes "hired"
- All other bids for that gig are marked as "rejected"
- All operations are wrapped in a MongoDB transaction to prevent race conditions

### 2. Real-time Notifications
- Uses Socket.io for real-time communication
- When a freelancer is hired, they receive an instant notification
- No page refresh required

### 3. Secure Authentication
- JWT tokens stored in HttpOnly cookies
- Password hashing with bcrypt
- Protected routes with middleware

## 🧪 Testing the Application

1. **Register a new user** at `/register`
2. **Login** at `/login`
3. **Post a gig** from the home page or client dashboard
4. **Browse gigs** from the freelancer dashboard
5. **Submit a bid** on any open gig
6. **View bids** from the client dashboard
7. **Hire a freelancer** - this will trigger a real-time notification

## 🚀 Deployment

### Backend Deployment
1. Set environment variables in your hosting platform
2. Ensure MongoDB is accessible
3. Update CORS settings for your frontend URL

### Frontend Deployment
1. Update API base URL in `src/api/axios.js`
2. Update Socket.io URL in `src/socket.js`
3. Build the project: `npm run build`
4. Deploy the `dist` folder

## 📝 Notes

- The application uses fluid roles - any user can be both a client and freelancer
- All API calls include credentials for cookie-based authentication
- Socket.io rooms are used for user-specific notifications
- MongoDB transactions ensure data consistency during hiring

## 🤝 Contributing

This is a project assignment. For production use, consider:
- Adding input validation and sanitization
- Implementing rate limiting
- Adding comprehensive error handling
- Writing unit and integration tests
- Adding email notifications
- Implementing payment integration

## 📄 License

This project is created for educational purposes.
