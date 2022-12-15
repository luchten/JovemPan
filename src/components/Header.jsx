import React from "react";
import { useState } from "react";
import "../styles/header.css";
import "../styles/headerMobile.css";

export default function Header(props) {       
    const [menuState, setMenuState] = useState();

    const showMenu = () => {
        setMenuState('show');        
    }   
    
    props.func(menuState);
    
    return (
        <div className="container-lg px-0 gx-0">                                    
            <div className="row">
                <div className="col">
                    <div className="header">
                        <a href="#"><img src="images/logo.png" alt="" /></a>
                        <ul className="info">
                            <li><a href="#" id="first">newsletter <i className="bi bi-envelope-fill"></i></a></li>
                            <li id="mude-cidade">
                                <a href="#">mude a cidade <i className="bi bi-geo-alt-fill"></i></a>
                                <ul className="mude-cidade">
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                    <li><a href="#">Floripa-SC</a></li>
                                </ul>
                            </li>
                            <li id="ouca-vivo">
                                <a href="#">ouça ao vivo <i className="bi bi-headphones"></i></a>
                                <ul className="ouca-vivo">
                                    <li><a href="#">JP FM</a></li>
                                    <li><a href="#">JP FM</a></li>
                                    <li><a href="#">JP FM</a></li>
                                    <li><a href="#">JP FM</a></li>
                                    <li><a href="#">JP FM</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="search">
                            <input type="search" name="" id="" />
                            <button className="search-button"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                    <div className="header-mobile">
                        <div className="menu">
                            <button className="header-button" onClick={showMenu}><i class="bi bi-list"></i></button>
                            <button className="header-button"><i class="bi bi-envelope-fill"></i></button>
                        </div>
                        <a href="#"><img src="/images/logo1.png" alt="" /></a>
                        <div className="cidade">
                            <button className="header-button"><i class="bi bi-geo-alt-fill"></i></button>
                            <button className="header-button"><i class="bi bi-headphones"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
