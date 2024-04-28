import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
//pages
import Home from "./pages/Home/Home";
import Collection from "./pages/Collection/Collection";
import Product from "./pages/Product/Product";
import AuthPage from "./pages/Auth/AuthPage";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  element={<MainLayout />}>
            <Route index element={ <Home /> } />
            <Route path="collection/:colName" element={ <Collection /> } />
            <Route path="product" element={<Product />} />
            <Route path="account/signup" element={<AuthPage />} />
            <Route path="account/login" element={<AuthPage />} />

        </Route>    
    )
);

export default router