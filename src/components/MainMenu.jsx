import React from "react";
import "../styles/mainMenu.css";

export default function MainMenu() {
  return (
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
  );
}
