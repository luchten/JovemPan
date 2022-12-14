import React, { useState } from "react";
import "../styles/mainMenu.css";
import "../styles/mainMenuMobile.css";
import "../styles/header.css";
import "../styles/headerMobile.css";

export default function MainMenu() {
  const [menuState, setMenuState] = useState('');

  const hideMenu = () => {
    setMenuState('');
  }

  const showMenu = () => {
    setMenuState('show');
  }

  return (
    <div>
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
      
      <div className="main-menu">
        <div className="container-lg">
          <div className="row">
            <div className="col">
              <ul className="menu-links">
                <li className="news-li">
                  <a href="#"><img className="news-logo" src="images/news-logo.png" alt="" /></a>
                  <ul className="grade">
                    <li><a className="no-after" href="#">Grade de Programação</a></li>
                  </ul>
                </li>
                <li className="news-li">
                  <a href="#">Política</a>
                  <ul className="politica">
                    <li><a className="no-after" href="#">Eleições 2022</a></li>
                    <li><a className="no-after" href="#">Apuração - Presidente</a></li>
                    <li><a className="no-after" href="#">Apuração - Governador</a></li>
                    <li><a className="no-after" href="#">Apuração - Dep. Federal</a></li>
                    <li><a className="no-after" href="#">Apuração - Dep. Estadual</a></li>
                  </ul>
                </li>
                <li className="news-li">
                  <a href="#">Brasil</a>
                  <ul className="brasil">
                    <li><a className="no-after" href="#">Educação</a></li>
                    <li><a className="no-after" href="#">Coronavírus</a></li>
                    <li><a className="no-after" href="#">Saúde</a></li>
                  </ul>
                </li>
                <li className="news-li">
                  <a href="#">Economia</a>
                  <ul className="economia">
                    <li>
                      <a className="no-after" href="#">AO VIVO</a>
                      <a className="no-after" href="#">3 em 1</a>
                      <a className="no-after" href="#">Bate-pronto</a>
                      <a className="no-after" href="#">Boletim Coppolla</a>
                      <a className="no-after" href="#">Business</a>
                    </li>
                    <li>
                      <a className="no-after" href="#">Diálogo</a>
                      <a className="no-after" href="#">Direto ao Ponto</a>
                      <a className="no-after" href="#">Drops</a>
                      <a className="no-after" href="#">Flagrante</a>
                      <a className="no-after" href="#">Jornal da Manhã</a>
                    </li>
                    <li>
                      <a className="no-after" href="#">JP Domingo</a>
                      <a className="no-after" href="#">Linha de Frente</a>
                      <a className="no-after" href="#">Mala Pronta</a>
                      <a className="no-after" href="#">Morning Show</a>
                      <a className="no-after" href="#">Opinião</a>
                    </li>
                    <li>
                      <a className="no-after" href="#">Pânico</a>
                      <a className="no-after" href="#">Prós e Contras</a>
                      <a className="no-after" href="#">Reis da Resenha</a>
                      <a className="no-after" href="#">Sociedade Digital</a>
                      <a className="no-after" href="#">Talk Show</a>
                    </li>
                  </ul>
                </li>
                <li className="news-li"><a href="#">Mundo</a></li>
                <li className="news-li"><a href="#">Esportes</a></li>
                <li className="news-li"><a href="#">Entretenimento</a></li>
                <li className="news-li"><a href="#">Colunistas</a></li>
                <li className="news-li"><a href="#">Programas</a></li>
                <li className="news-li"><a href="#">Bem-estar</a></li>
                <li className="news-li"><a href="#">Podcasts</a></li>
                <li className="news-li"><a href="#">Últimas</a></li>
                <li className="news-li"><a href="#">Especiais</a></li>
              </ul>
              <div className={menuState == 'show' ? 'menu-mobile menu-mobile-show' : 'menu-mobile'}>
                <button className="close-mobile" onClick={hideMenu}><i class="bi bi-x-lg"></i></button>
                <div className="search-mobile">
                  <input className="input-search" type="search" name="" id="" />
                  <button className="button-search"><i class="bi bi-search"></i></button>
                </div>
                <div className="menu-links-mobile">
                  <div className="title-mobile">
                    <a href="#"><img className="news-logo" src="/images/news-logo-preto.png" alt="" /></a>
                  </div>
                  <a href="#">Grade de Programação</a>
                  <div className="title-mobile">
                    <a href="#">Política</a>
                  </div>
                  <a href="#">Eleições 2022</a>
                  <a href="#">* Apuração - Presidente</a>
                  <a href="#">* Apuração - Governador</a>
                  <a href="#">* Apuração - Dep. Federal</a>
                  <a href="#">* Apuração - Dep. Estadual</a>
                  <div className="title-mobile">
                    <a href="#">Brasil</a>
                  </div>
                  <a href="#">Educação</a>
                  <a href="#">Coronavírus</a>
                  <a href="#">Saúde</a>
                  <div className="title-mobile">
                    <a href="#">Economia</a>
                  </div>
                  <a href="#">Agronegócio</a>
                  <a href="#">Tecnologia</a>
                  <a href="#">Veículos</a>
                  <div className="title-mobile">
                    <a href="#">Mundo</a>
                  </div>
                  <div className="title-mobile">
                    <a href="#">Entretenimento</a>
                  </div>
                  <a href="#">Famosos</a>
                  <a href="#">Mulheres da Pan</a>
                  <a href="#">Música</a>
                  <a href="#">Playlists</a>
                  <a href="#">TV e Cinema</a>
                  <div className="title-mobile">
                    <a href="#">Colunistas</a>
                  </div>
                  <div className="colunistas-mobile">
                    <a className="no-after" href="#">AO VIVO</a>
                    <a className="no-after" href="#">3 em 1</a>
                    <a className="no-after" href="#">Bate-pronto</a>
                    <a className="no-after" href="#">Boletim Coppolla</a>
                    <a className="no-after" href="#">Business</a>
                    <a className="no-after" href="#">Diálogo</a>
                    <a className="no-after" href="#">Direto ao Ponto</a>
                    <a className="no-after" href="#">Drops</a>
                    <a className="no-after" href="#">Flagrante</a>
                    <a className="no-after" href="#">Jornal da Manhã</a>
                    <a className="no-after" href="#">JP Domingo</a>
                    <a className="no-after" href="#">Linha de Frente</a>
                    <a className="no-after" href="#">Mala Pronta</a>
                    <a className="no-after" href="#">Morning Show</a>
                    <a className="no-after" href="#">Opinião</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="appnews">
                <h6>APPNEWS:</h6>
                <div className="carousel">
                  <div className="scroll-1">
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum unde, laboriosam aspernatur, perferendis est totam vel praesentium et itaque illo provident iure quaerat numquam. Quam exercitationem pariatur eaque ea suscipit!</h4>
                  </div>
                  <div className="scroll-2">
                    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem rem obcaecati numquam dolorum enim error amet vel maxime consequuntur beatae eos perferendis neque molestias, officia velit, hic, architecto suscipit cupiditate?</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
