import { Outlet } from "react-router";
import { Header } from '../ui/Header';
import { Footer } from '../ui/Footer';
import { Scroll } from '../Scrool';

export const AppLayout = () => {
    return(
        <>
        <Scroll/>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}