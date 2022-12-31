import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import '../styles/home.css';
import "../styles/global.css";
import { Link } from "gatsby";
import Card from "../components/Card";
import Card1 from '../components/Card1';
import Card2 from "../components/Card2";
import noticias from '../script/news.js';
import noticias1 from '../script/news1.js';
import Carousel from "../components/Carousel";
import Colunistas from "../components/Colunistas";

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

export default function Home() {
  return (
    <Layout>
      <div className="container-lg">
        <div className="row my-4">
          <div className="col-xl-8 col-12">
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
            <div className="row g-3 my-4">
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

          <div className="col-xl-4 col-12 mt-4 mt-md-0">
            <div className="row">
              <div className="col text-center">
                <Link to="/">
                  <img className="video-img" src="images/video.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <Carousel />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <div className="colunistas">
                  <Link to="/"><h1>COLUNISTAS</h1></Link>
                  <Colunistas />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
