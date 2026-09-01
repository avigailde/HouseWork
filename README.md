# Shopping List - Home Assignment

A full-stack shopping list application built with React, .NET, Node.js, SQL Server and MongoDB.

The application allows users to select products by category, add them to a shopping cart, enter customer details and submit an order.

## Technologies

### Client
- React
- Redux Toolkit
- Vite

### Categories API
- .NET 10
- Entity Framework Core
- SQL Server LocalDB

### Orders API
- Node.js
- Express
- Mongoose
- MongoDB

## Project Structure

```text
HouseWork/
├── client/          React client
├── CategoryApi/     .NET API for categories and products
└── order-api/       Node.js API for orders
```

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- .NET 10 SDK
- SQL Server LocalDB
- MongoDB Community Server

## Running the Project

The application consists of three components that should be running simultaneously.

### 1. Categories API

Open a terminal:

```bash
cd CategoryApi
dotnet restore
dotnet ef database update
dotnet run
```

The API should run on:

```text
http://localhost:5017
```

Categories and products are stored in SQL Server and are initialized through Entity Framework migrations.

### 2. Orders API

Make sure the local MongoDB service is running.

Create a `.env` file inside the `order-api` directory:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/housework
```

Then run:

```bash
cd order-api
npm install
npm start
```

The Orders API should run on:

```text
http://localhost:3001
```

The MongoDB database and `orders` collection are created automatically when the first order is saved.

### 3. Client

Open another terminal:

```bash
cd client
npm install
npm run dev
```

Open the URL displayed by Vite in the browser.

By default:

```text
http://localhost:5173
```

## Application Flow

1. Categories and their products are loaded from the .NET API.
2. Select a category, product and quantity.
3. Add products to the shopping cart.
4. Click "Continue Order".
5. Enter full name, address and email.
6. Review the selected products.
7. Click "Confirm Order".
8. The order and its products are saved in MongoDB.

## Data Storage

### SQL Server

Stores the categories and products used by the shopping screen.

The database is created using Entity Framework Core migrations.

### MongoDB

Stores submitted orders, including:

- Full name
- Address
- Email
- Selected products and quantities
- Creation date

## Notes

- The project uses SQL Server LocalDB for local development.
- MongoDB is expected to run locally on port `27017`.
- The `.env` file is excluded from source control.