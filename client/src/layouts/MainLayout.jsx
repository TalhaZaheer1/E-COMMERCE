import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import Container from "../components/Container"

export default function MainLayout(){
    return (
    <>
    <Container>
    <NavBar />
    <Outlet />
    </Container>
    </>
    )
}