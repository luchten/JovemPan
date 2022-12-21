import React from "react";
import Banner from "./Banner";
import "bootstrap-icons/font/bootstrap-icons.css";
import MainMenu from "./MainMenu";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <MainMenu />
            <Banner />
            {children}
        </div>
    );
}
