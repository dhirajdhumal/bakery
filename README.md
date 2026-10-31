# Bakery

A responsive bakery ordering application built with React and Vite. Customers can browse bakery products, manage a shopping cart, place orders, and maintain their profile. An administration area provides access to dashboard and order-management views.

## Features

### Customer experience

- Browse products and category-specific menus
- View bakery information and image gallery
- Add products to a cart and update quantities
- Complete checkout after authentication and profile completion
- View order history and order details
- Create and update a customer profile
- Build a custom cake
- Responsive layout for desktop and mobile screens
- Toast notifications for important actions

### Administration

- Separate admin application and login route
- Dashboard view
- Order-management view

## Technology Stack

- React 19
- React Router 7
- Vite
- Bootstrap 5
- Bootstrap Icons
- React Toastify
- jsPDF and jsPDF AutoTable
- Oxlint

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd Bakery
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown by Vite, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Application Routes

### Customer routes

- `/` - Home
- `/products` - Product catalogue
- `/cake-menu` - Cake menu
- `/donut-menu` - Donut menu
- `/pastrie-menu` - Pastry menu
- `/cookies-menu` - Cookie menu
- `/brownie-menu` - Brownie menu
- `/bread-menu` - Bread menu
- `/your-cake` - Custom cake builder
- `/cart` - Shopping cart
- `/orders` - Order history
- `/profile` - Customer profile
- `/login` - Customer login
- `/register` - Customer registration
- `/about-us` - About page
- `/gallery` - Gallery

### Administration routes

- `/admin` - Admin dashboard
- `/admin/admin-login` - Admin login
- `/admin/orders` - Admin orders

## Data Persistence

This project currently uses the browser's `localStorage` for client-side persistence. Cart items, registered users, the logged-in user, and order data are stored locally in the browser. Clearing browser storage removes this data.

Because there is no remote backend or database configured, this implementation is intended for demonstration and frontend development purposes.

## Project Structure

```text
src/
├── assets/           # Images and static assets
├── componenets/      # Shared UI components
├── contextapi/       # React context providers
├── data/             # Product and application data
├── pages/
│   ├── admin/        # Administration pages
│   └── user/         # Customer-facing pages
├── AdminApp.jsx      # Admin application shell
├── App.jsx           # Customer application shell
├── router.jsx        # Application route configuration
└── main.jsx          # Application entry point
```

## Production Build

Create a production build with:

```bash
npm run build
```

The generated files are placed in the `dist/` directory. The included `vercel.json` rewrite configuration supports client-side routing when deployed to Vercel.

## License

No license has been specified for this project.