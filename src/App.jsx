// src/App.jsx
import "./App.css";
import Header from "../components/Header.jsx";
import VideoGym from "../components/VideoGym.jsx";
import NuestrosProgramas from "../components/NuestrosProgramas.jsx";
import Card from "../components/Card.jsx";
import Coaches from "../components/Coaches.jsx";
import CardCirculares from "../components/CardCirculares.jsx";
import Publicidad from "../components/Publicidad.jsx";
import Footer from "../components/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <VideoGym />
        <NuestrosProgramas />
        <div className="card-container">
          <Card description="Musculación" backgroundImage="/images/card1.png" />
          <Card
            description="Funcional"
            backgroundImage="/images/funcional.png"
          />
          <Card description="Yoga" backgroundImage="/images/yoga.png" />
          <Card description="Stretching" backgroundImage="/images/stre1.png" />
          <Card description="Taebo" backgroundImage="/images/taebo.png" />
          <Card
            description="Esferodinamia"
            backgroundImage="/images/esferodinamia.png"
          />
        </div>
        <Coaches />
        <div className="card-container1">
          <CardCirculares
            descripcion="Martin Gimenez"
            backgroundImg="/images/coach1.png"
          />
          <CardCirculares
            descripcion="Romina Suarez"
            backgroundImg="/images/coach2.png"
          />
          <CardCirculares
            descripcion="Juan Martinez"
            backgroundImg="/images/coach3.png"
          />
          <CardCirculares
            descripcion="Cecilia Capobianco"
            backgroundImg="/images/coach4.png"
          />
          <CardCirculares
            descripcion="Julieta Barrionuevo"
            backgroundImg="/images/coach5.png"
          />
          <CardCirculares
            descripcion="Mariano Luca"
            backgroundImg="/images/coach6.png"
          />
        </div>
        <Publicidad/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
