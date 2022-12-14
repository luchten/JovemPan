import React from "react";
import MainMenu from "./MainMenu";
import Footer from "./Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Layout({ children }) {
    return (
        <div>
            <MainMenu />
            {children}
            <Footer />
        </div>
    );
}
