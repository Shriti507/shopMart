# Project Name: ShopSmart (Collaborative Group Shopping)

## 1. Project Overview

**ShopSmart** is a shared e-commerce platform designed for students and communities. It transforms online shopping from a solitary activity into a collaborative experience. It allows multiple people to join a single **"Group Cart"** from their own devices, add items together in real-time, and automatically split the final bill.

It aims to make buying daily essentials together easier, cheaper, and faster than traditional e-commerce apps.

## 2. Problem Statement

- **Wasted Money:** When roommates or neighbors order food or supplies individually, everyone pays a separate delivery fee.
- **Manual Bill Splitting:** Usually, one person orders for the group and then has to manually calculate and collect money from each friend, which is error-prone and awkward.
- **Missed Discounts:** Individual buyers often miss out on "Bulk Discounts" or "Wholesale Prices" that are only available for larger order volumes.

## 3. The Solution

ShopSmart solves these inefficiencies with a **Live Group Lobby**:

- **Real-Time Collaboration:** One user creates a cart and shares a link. Friends join instantly and add their own items to the same cart.
- **Live Updates:** When a friend adds an item, it appears on everyone's screen immediately (powered by **WebSockets**), eliminating the need to refresh.
- **Smart Calculator:** The system automatically separates the bill. It tracks exactly who ordered what and splits shared costs (like tax and delivery) evenly.
- **Bulk Savings:** The platform automatically unlocks special discounts when the total group order size reaches specific targets.

## 4. Technical Approach

- **Real-Time Engine:** Uses **Socket.io** so multiple users can interact with the cart simultaneously without data conflicts.
- **Web Portal (Next.js):** Allows users to join a group via a simple shared link without needing to download an app immediately.
- **Mobile App (React Native):** A dedicated mobile interface for managing orders, browsing products, and receiving group notifications.
- **Backend:** Built with **Node.js** and **MongoDB** to handle complex relationships between multiple users and a single group order.
