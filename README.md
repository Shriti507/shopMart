# ShopSmart 🛒
### Simple & Efficient E-commerce Platform

**ShopSmart** is a streamlined e-commerce application designed for a smooth and intuitive shopping experience. It allows users to browse products across various categories, manage a personal shopping cart with full CRUD (Create, Read, Update, Delete) functionality, and process orders.

Built with the MERN stack, it prioritizes performance, clean UI, and ease of use.

---

## Key Features

- **Product Browsing**: Explore a wide range of products categorized for easy navigation.
- **Cart Management (CRUD)**:
  - **Add**: Seamlessly add items to your shopping cart.
  - **Read**: View all items in your cart with real-time price calculations.
  - **Update**: Adjust quantities or modify item selections directly from the cart.
  - **Delete**: Remove unwanted items or clear the entire cart in one click.
- **User Authentication**: Secure Sign Up and Login system powered by JWT.
- **Order History**: Track your previous purchases and order status from a dedicated dashboard.
- **Responsive Design**: Fully optimized for both desktop and mobile viewing.

---

## Technical Stack

- **Frontend (Web):** [React](https://react.dev/) + [Vite](https://vitejs.dev/) 
- **Backend:** [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) (Mongoose)


---

##  Project Structure

```text
├── client/              # React frontend (Vite)
│   ├── src/
│   │   ├── components/  # UI components (Header, Banner, Hero)
│   │   ├── context/     # Auth and Cart state management
│   │   ├── pages/       # Views (Home, Categories, Cart, Dashboard)
│   │   └── services/    # API integration (shopApi.js)
├── server/              # Node.js backend
│   ├── src/
│   │   ├── controllers/ # Request handlers (Auth, Cart, Order)
│   │   ├── models/      # MongoDB Schemas
│   │   ├── routes/      # API Endpoints
│   │   └── server.ts    # App entry point
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (Atlas or Local)

### 1. Backend Setup
```bash
cd server
npm install
npm run dev
```

### 2. Frontend Setup
```bash
cd client
npm install
npm run dev
```

---

##  Deployment
- **Backend:** Deployed on **AWS EC2** (using PM2/Docker).
- **Frontend:** Built for production and hosted on **AWS S3**.
- **CORS:** Configured to allow secure communication between the S3 origin and EC2 backend.

---


