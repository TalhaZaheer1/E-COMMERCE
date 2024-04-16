import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
//pages
import Home from "./pages/Home/Home";
import Collection from "./pages/Collection/Collection";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  element={<MainLayout />}>
            <Route index element={ <Home /> } />
            <Route path="collection/:colName" element={ <Collection /> } />

        </Route>    
    )
);

export default router