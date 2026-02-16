import paths from '../configs/paths';
import layouts from '../configs/layouts';

// Pages
import Home from '../pages/Home/Home';
import Category from '../pages/Product/Category';
import ProductDetail from '../pages/Product/ProductDetail';
import Cart from '../pages/Order/Cart';
import Checkout from '../pages/Order/Checkout';
import Promotions from '../pages/Product/Promotions';
import Blog from '../pages/Info/Blog';
import Support from '../pages/Info/Support';
import About from '../pages/Info/About';
import StoreSystem from '../pages/Info/StoreSystem';
import TechNews from '../pages/Info/TechNews';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import ResetPassword from '../pages/Auth/ResetPassword';
import Dashboard from '../pages/Account/Dashboard';
import EditProfile from '../pages/Account/EditProfile';
import ChangePassword from '../pages/Account/ChangePassword';
import OrderHistory from '../pages/Account/OrderHistory';
import OrderDetail from '../pages/Account/OrderDetail';
import EmailVerification from '../pages/Auth/EmailVerification';
import VerifyEmailSuccess from '../pages/Auth/VerifyEmailSuccess';
import Unauthorized from '../pages/Error/Unauthorized';
import NotFound from '../pages/Error/NotFound';

const routes = [
    // Public Routes
    { path: paths.home, component: Home, layout: layouts.defaultLayout },
    { path: paths.category, component: Category, layout: layouts.defaultLayout },
    { path: paths.productDetail, component: ProductDetail, layout: layouts.defaultLayout },
    { path: paths.cart, component: Cart, layout: layouts.defaultLayout },
    { path: paths.promotions, component: Promotions, layout: layouts.defaultLayout },
    { path: paths.blog, component: Blog, layout: layouts.defaultLayout },
    { path: paths.support, component: Support, layout: layouts.defaultLayout },
    { path: paths.about, component: About, layout: layouts.defaultLayout },
    { path: paths.techNews, component: TechNews, layout: layouts.defaultLayout },
    { path: paths.stores, component: StoreSystem, layout: layouts.headerOnlyLayout },
    
    // Auth Routes
    { path: paths.checkout, component: Checkout, layout: layouts.authLayout },
    { path: paths.login, component: Login, layout: layouts.authLayout },
    { path: paths.register, component: Register, layout: layouts.authLayout },
    { path: paths.forgotPassword, component: ForgotPassword, layout: layouts.authLayout },
    { path: paths.resetPassword, component: ResetPassword, layout: layouts.authLayout },
    { path: paths.verifyEmail, component: EmailVerification, layout: layouts.authLayout },
    { path: paths.verifyEmailSuccess, component: VerifyEmailSuccess, layout: layouts.authLayout },
    { path: paths.unauthorized, component: Unauthorized, layout: layouts.authLayout },
    { path: paths.notFound, component: NotFound, layout: layouts.authLayout },

    // Protected Routes (marked with protected: true)
    { path: paths.dashboard, component: Dashboard, layout: layouts.defaultLayout, protected: true },
    { path: paths.profile, component: EditProfile, layout: layouts.defaultLayout, protected: true },
    { path: paths.changePassword, component: ChangePassword, layout: layouts.defaultLayout, protected: true },
    { path: paths.orderHistory, component: OrderHistory, layout: layouts.defaultLayout, protected: true },
    { path: paths.orderDetail, component: OrderDetail, layout: layouts.defaultLayout, protected: true },
];

export { routes };
