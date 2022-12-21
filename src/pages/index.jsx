import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/Layout";
import '../styles/home.css';
import "../styles/global.css";
import { Link } from "gatsby";
import Card from "../components/Card";
import Card1 from '../components/Card1';
import noticias from '../script/news.js';
import noticias1 from '../script/news1.js';


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
        <div className="row mt-4">
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
            <div className="row mt-5">
              <div className="col-md-6 col-12">
                <div className="free-card1">
                  <img className="img-fluid" src="images/dinheiro.png" alt="" />
                  <div>
                    <h6>Esportes</h6>
                    <h5>Jogador da Argentina arremessa dinheiro para torcida durante festa do título mundial; assista</h5>
                    <p>Jogador da Argentina arremessa dinheiro para torcida durante festa do título mundial; assista</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="free-card2">
                  <h6>Entretenimento</h6>
                  <h5>Morre o ator Pedro Paulo Rangel aos 74 anos no Rio de Janeiro</h5>
                  <p>Famosos lamentam a morte de Pedro Paulo Rangel: ‘Um dos maiores de todos os tempos’</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 text-center">
            <Link to="/">
              <img src="images/video.png" alt="" />
            </Link>
            <div className="row">
              <div className="col">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel repudiandae laboriosam earum assumenda molestiae quia quam minima, recusandae delectus provident molestias! Quam, fugit natus dicta cumque laboriosam perferendis cum alias.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
