import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

export default function MainLayout(){
    return (
    <>
    <NavBar />
    <Outlet />
    </>
    )
}