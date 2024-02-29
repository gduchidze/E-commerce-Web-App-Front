import { Suspense, lazy } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";


const Home = lazy(() => import("../pages/Home"));
const MainProfile = lazy(() => import("../pages/MainProfile"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Products = lazy(() => import("../pages/Products"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SingIn"));
const UserProfile = lazy(() => import("../pages/UserProfile"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Routers = () => {
    const location = useLocation();
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes location={location}>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<MainProfile />} />
        <Route path="products" element={<Products />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="profile/:name" element={<UserProfile />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </Suspense>
  );
};
export default Routers;
