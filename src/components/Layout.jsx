import React from "react";
import Header from "./Header";
import MainMenu from "./MainMenu";
import Footer from "./Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <MainMenu />
            {children}
            <Footer />
        </div>
    );
}
