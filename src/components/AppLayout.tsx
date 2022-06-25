import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function AppLayout() {
    return (
        <div className="w-full h-full bg-gray-50">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default AppLayout;
