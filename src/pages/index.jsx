import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import '../styles/home.css';
import "../styles/global.css";
import { Link } from "gatsby";
import Card from "../components/Card";
import Card1 from '../components/Card1';
import Card2 from "../components/Card2";
import Slide from "../components/Slide";
import noticias from '../script/news.js';
import noticias1 from '../script/news1.js';
import slides from '../script/slides.js';
import { colunistas1, colunistas2 } from '../script/colunistas.js';
import { useState } from "react";
import SlideItem from "../components/SlideItem.jsx";

const createNews = (news) => {
  return (
    <div className="col-md-6 col-12">
      <Card src={news.src} title={news.title} text={news.text}></Card>
    </div>
  );
}

const createNews1 = (news) => {
  return (
    <div className="col-md-3 col-12">
      <Card1 title={news.title} text={news.text}></Card1>
    </div>
  );
}

const createSlides = (slide) => {
  return (
    <Slide
      src={slide.src}
      title={slide.title}
      link={slide.link}>
    </Slide>
  );
}

const createColunistas = (colunista) => {
  return (
    <SlideItem
      src={colunista.src}
      title={colunista.title}
      text={colunista.text}>
    </SlideItem>
  );
}

export default function Home() {
  const [slideState, changeState] = useState();
  const changeSlide = (slideNumber) => {
    switch (slideNumber) {
      case 1:
        changeState();
        break;
      case 2:
        changeState('slide2');
        break;
      case 3:
        changeState('slide3');
        break;
      case 4:
        changeState('slide4');
        break;
    }
  }

  const [slideState1, changeState1] = useState();
  const changeSlide1 = (slideNumber) => {
    switch (slideNumber) {
      case 1:
        changeState1();
        break;
      case 2:
        changeState1('slide2');
        break;
    }
  }

  return (
    <Layout>
      <div className="container-lg">
        <div className="row my-4">
          <div className="col-8">
            <Link to="/" className="stf">
              <h6>STF</h6>
              <h1>Gilmar Mendes suspende porte de armas de Zambelli e dá 48 horas para deputada entregar pistola</h1>
              <p>Ministro atendeu pedido da PGR motivado por episódio envolvendo a parlamentar e um homem nas ruas de SP; defesa afirma que argumento da Procuradoria não condiz com depoimento da parlamentar</p>
            </Link>
            <div className="row g-3 mt-4">
              {noticias.map(createNews)}
            </div>
            <div className="row g-3 mt-4">
              {noticias1.map(createNews1)}
            </div>
            <div className="row g-3 mt-5">
              <div className="col-md-6 col-12">
                <Card2
                  src='images/dinheiro.png'
                  title='Esportes'
                  link='Jogador da Argentina arremessa dinheiro para torcida durante festa do título mundial; assista'
                  text='Jogador da Argentina arremessa dinheiro para torcida durante festa do título mundial; assista'>
                </Card2>
              </div>
              <div className="col-md-6 col-12">
                <Card2
                  src='images/morre.png'
                  title='Entretenimento'
                  link='Morre o ator Pedro Paulo Rangel aos 74 anos no Rio de Janeiro'
                  text='Famosos lamentam a morte de Pedro Paulo Rangel: ‘Um dos maiores de todos os tempos’'>
                </Card2>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="row">
              <div className="col text-center">
                <Link to="/">
                  <img src="images/video.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <div className="my-carousel">
                  <div className={slideState == 'slide2' ? 'my-slider slide2' : slideState == 'slide3' ? 'my-slider slide3' : slideState == 'slide4' ? 'my-slider slide4' : 'my-slider'}>
                    {slides.map(createSlides)}
                  </div>
                  <div className="slide-controls">
                    <i class="bi bi-dot" onClick={() => changeSlide(1)}></i>
                    <i class="bi bi-dot" onClick={() => changeSlide(2)}></i>
                    <i class="bi bi-dot" onClick={() => changeSlide(3)}></i>
                    <i class="bi bi-dot" onClick={() => changeSlide(4)}></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <div className="colunistas">
                  <Link to="/"><h1>COLUNISTAS</h1></Link>
                  <div className="my-carousel1">
                    <div className={slideState1 == 'slide2' ? 'my-slider1 slide2' : 'my-slider1'}>
                      <div className="my-slide1">
                        {colunistas1.map(createColunistas)}
                      </div>
                      <div className="my-slide1">
                        {colunistas2.map(createColunistas)}
                      </div>
                    </div>
                  </div>
                  <div className="colunistas-controls">
                    <i class="bi bi-caret-left-fill" onClick={() => changeSlide1(1)}></i>
                    <div>
                      <i class="bi bi-0-circle-fill" onClick={() => changeSlide1(1)}></i>
                      <i class="bi bi-1-circle-fill" onClick={() => changeSlide1(2)}></i>
                    </div>
                    <i class="bi bi-caret-right-fill" onClick={() => changeSlide1(2)}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
