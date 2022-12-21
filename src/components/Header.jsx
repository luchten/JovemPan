import React from "react";

export default function Header() {
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
                </div>
            </div>
        </div>
    );
}
