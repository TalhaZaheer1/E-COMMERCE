import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  element={<MainLayout />}>
            <Route index element={ <Home /> } />
        </Route>    
    )
);

export default router