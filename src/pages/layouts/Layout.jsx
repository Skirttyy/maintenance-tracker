import { Outlet } from "react-router";
import Footer from "../general/Footer";
import Header from "../general/Header";
import FormProvider from "../maintenance-creator/context/FormContext";

export default function Layout () {
    return (
        <>
            <Header />
            <FormProvider>
                <Outlet />
            </FormProvider>
            <Footer />
        </>
    )
}