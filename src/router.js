import App from './App'
import Main from './components/Main'
import DieBank from './components/DieBank'
import Products from './components/Products'
import Services from './components/Services'
import AboutUs from './components/AboutUs'


const router = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/die-bank',
        component: DieBank
    },
    {
        path: '/products',
        component: Products
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/about-us',
        component: AboutUs
    }
]
export default router
