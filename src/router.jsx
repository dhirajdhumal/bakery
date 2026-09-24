import {createBrowserRouter} from 'react-router-dom';
import App from './App'
import Home from './pages/user/Home'
import Login from './pages/user/Login'
import Products from './pages/user/Products'
import ProductDetails from './pages/user/ProductDetails'
import Cart from './pages/user/Cart'
import Orders from './pages/user/Orders'
import OrderDetails from './pages/user/OrderDetails'
import Checkout from './pages/user/Checkout'
import Register from './pages/user/Register'
import AdminApp from './AdminApp'
import Dashboard from './pages/admin/Dashboard'
import About from './pages/user/About';
import Contacts from './pages/user/Contacts';
import Gallery from './pages/user/Gallery';
import AdminLogin from './pages/admin/AdminLogin';
import AdminOrders from './pages/admin/AdminOrders';
import Profile from './pages/user/Profile';




const router = createBrowserRouter([

    // User Routes
    {
        path: '/',
        element: <App />,

        children : [
            {
                index: true,
                element: <Home />
            },
            {
                path:  '/products',
                element: <Products />
            },
            {
                path: '/product-details',
                element: <ProductDetails />
            },
            {
                path: '/about-us',
                element: <About />
            },
            {
                path: '/gallery',
                element: <Gallery />
            },
            {
                path: '/contact-us',
                element: <Contacts />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/orders',
                element: <Orders />
            },
            {
                path: '/order-details',
                element: <OrderDetails />
            },
            {
                path: '/checkout',
                element: <Checkout />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },

    // Admin Routes
    {
        path: '/admin',
        element: <AdminApp />,

        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'admin-login',
                element: <AdminLogin />
            },
            {
                path: 'orders',
                element: <AdminOrders /> 
            }
        ]
    }
])

export default router;