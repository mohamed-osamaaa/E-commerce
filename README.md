# NestJS eCommerce REST API

## Description

This is a scalable and modular eCommerce REST API built with NestJS. It includes authentication, user management, product handling, order processing, and reviews. It uses JWT for authentication, authorization roles(admin,user), bcrypt for password hashing, and DTOs for validation.

## Features

- **JWT Authentication** with bcrypt password hashing
- **User Management** (Registration, Login, Profile)
- **Product Management** (Categories, Listings, CRUD operations)
- **Order Processing** (Cart, Checkout, Order Tracking)
- **Review System** (Product Reviews and Ratings)
- **Modular Architecture** using NestJS Modules
- **Database**: TypeORM with PostgreSQL

## Installation

```bash
# Clone the repository
git clone <repo-url>

# Navigate to the project directory
cd E-commerce

# Install dependencies
npm install
```

## Configuration

Create a `.env` file in the root directory and configure the following environment variables:

```env
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=

ACCESS_TOKEN_SECRET_KEY=
ACCESS_TOKEN_EXPIRE_TIME=
```

## Running the Application

```bash
# Start the development server
npm run start:dev

# Build the project
npm run build

# Start the production server
npm run start
```

## API Documentation (Postman Collections)

- [Users API](https://www.postman.com/speeding-flare-128587/workspace/e-commerce/collection/37065341-6f8e519e-042e-4395-a886-cf65c262204f?action=share\&creator=37065341)
- [Categories API](https://www.postman.com/speeding-flare-128587/workspace/e-commerce/collection/37065341-d6a255e7-707f-475a-a56f-b69d15253b75?action=share\&creator=37065341)
- [Products API](https://www.postman.com/speeding-flare-128587/workspace/e-commerce/collection/37065341-e1dd039c-23d9-486b-bc8c-9eb4ae122158?action=share\&creator=37065341)
- [Orders API](https://www.postman.com/speeding-flare-128587/workspace/e-commerce/collection/37065341-610f7dea-e67c-4ad0-99f2-eb18e4db13d4?action=share\&creator=37065341)
- [Reviews API](https://www.postman.com/speeding-flare-128587/workspace/e-commerce/collection/37065341-353f5210-03eb-4c39-9385-f9bb2e0ee35e?action=share\&creator=37065341)

## Technologies Used

- **NestJS** - Backend Framework
- **TypeORM** - ORM for PostgreSQL
- **PostgreSQL** - Database
- **JWT & Bcrypt** - Authentication & Security
- **DTO Validation** - Request Data Validation

##

