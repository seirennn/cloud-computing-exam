# E-Commerce Web Application

A modern e-commerce web application built with Next.js, featuring a shopping cart, product catalog, and responsive design.

## Features

- 🛍️ Product catalog with detailed information
- 🛒 Shopping cart functionality
- 📱 Responsive design for all devices
- ⚡ Fast and optimized with Next.js
- 🎨 Modern and clean UI

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS3 with modern features
- **Deployment**: Cloud Render (Docker)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cloud_computing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
npm start
```

## Deployment to Cloud Render

### Option 1: Using Docker (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)

2. Create a new Web Service on Cloud Render:
   - Go to [Cloud Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your Git repository

3. Configure the service:
   - **Name**: ecommerce-app (or your preferred name)
   - **Environment**: Docker
   - **Build Command**: (leave empty, Docker will handle it)
   - **Start Command**: (leave empty, Docker will handle it)
   - **Instance Type**: Free tier or Starter ($7/month)

4. Click "Create Web Service"

5. Cloud Render will automatically:
   - Build the Docker image
   - Deploy your application
   - Provide a public URL

### Option 2: Direct Node.js Deployment

1. In Cloud Render, select "Node" instead of "Docker"
2. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment Variables**: `NODE_ENV=production`

## Project Structure

```
cloud_computing/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page with cart logic
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── ProductsGrid.tsx # Product display
│   └── CartModal.tsx    # Shopping cart modal
├── public/              # Static assets
├── Dockerfile           # Docker configuration
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript configuration
```

## Environment Variables

No environment variables required for basic functionality.

## Features Explained

### Product Catalog
- Displays 8 different products
- Each product has name, description, price, and emoji icon
- Products are displayed in a responsive grid layout

### Shopping Cart
- Add products to cart
- Update quantities
- Remove items
- View total price
- Checkout functionality (demo)

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface

## License

This project is created for educational purposes.

