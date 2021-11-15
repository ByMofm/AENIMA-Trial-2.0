import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import ImagProps from './ImagProps'
import { Container,Col } from "react-bootstrap";
import pin from "../Assets/iconos/ic_pin.svg"
import img_big_01 from '../Assets/img/Viajes_Hero.jpg'
import img_big_02 from '../Assets/img/Viajes_Hero2.jpg'
import img_big_03 from '../Assets/img/Viajes_Hero3.jpg'
import img_big_04 from '../Assets/img/Viajes_Hero4.jpg'
import './Inicio.css';
import art_small_01 from "../Assets/img/articulo_small_01.png"
import art_small_02 from "../Assets/img/articulo_small_02.png"
import art_small_03 from "../Assets/img/articulo_small_03.png"
import time from "../Assets/iconos/time.svg"



function Inicio() {
    
    let StyleBanner={
        
        
        height: '5vh',
        backgroundColor: 'rgba(235, 235, 235, .5)',
        boxShadow: '-16px -2px 36px 0px rgba(0,0,0,0.37)',
        webkitBoxShadow: '-16px -2px 36px 0px rgba(0,0,0,0.37)'
    }
    
    return (
        <ParallaxProvider>
          <ImagProps  imgsrc={img_big_01} height="65vh" opacity="0.5">
            <Container className="container-left">       
                <img src={pin} alt="pin" className="pin" />
                <h1 className="titulo-home">AMERICA DEL SUR</h1>
                <hr className="divider"/>
                <h2 className="texto_home">Lugares maravillosos por America del Sur</h2>
                <h3 className="texto_descriptivo_home">Estos son algunos lugares que elijen la mayoría de los turistas que visitan America del Sur.</h3>
            </Container>
          </ImagProps>
          <div style={StyleBanner}>
              <h2 className="box-tendencias">TENDENCIAS</h2>
          </div>
          <ImagProps  imgsrc={img_big_02} height="60vh" opacity="0.5">
            <h1 className="place_image2">Machu Picchu</h1>
            <h2 className="tittle_image2">Montañas y Magia</h2>
            <h3 className="paragraph_image2">Uno de los lugares más mágicos del planeta. El atractivo de alcanzar la antigua ciudad de Machu Picchu</h3>
          </ImagProps>
          <ImagProps  imgsrc={img_big_03} height="60vh" opacity="0.5">
            <h1 className="place_image3">Playa Noronky</h1>
            <h2 className="tittle_image3">Playas y sol</h2>
            <h3 className="paragraph_image3">Esta remota playa frente a la costa de Venezuela donde la naturaleza se muestra con todo su esplendor</h3>
          </ImagProps>
          <ImagProps  imgsrc={img_big_04} height="60vh" opacity="0.5">
            <h1 className="place_image4">Monte Fitz Roy</h1>
            <h2 className="tittle_image4">Nieve y aventura</h2>
            <h3 className="paragraph_image4">Este pico de 3.405 metros es el emblema de los Andes más agrestes y salvajes.</h3>
          </ImagProps>
          <div style={StyleBanner}>
              <h2 className="box-tendencias">BLOG</h2>
          </div>
          <Container className="cg-blog-right">    
                        <Col className="col-blog-03">
                            <img src={art_small_01} className="card-image"/>
                            <span className="card03-text-blog">Artículo de elefante</span>
                            <img src={time} className="icon03-time" />
                            <span className="card03-time-blog">Hace 3h</span>
                        </Col>
                        <Col className="col-blog-04">
                            <img src={art_small_02} className="card-image"/>
                            <span className="card04-text-blog">Artículo de loro</span>
                            <img src={time} className="icon04-time" />
                            <span className="card04-time-blog">Hace 4h</span>
                        </Col>
                        <Col className="col-blog-05">
                            <img src={art_small_03} className="card-image"/>
                            <span className="card05-text-blog">Artículo de camino</span>
                            <img src={time} className="icon05-time" />
                            <span className="card05-time-blog">Hace 8h</span>
                        </Col>

                </Container>       
        </ParallaxProvider>

    )
}

export default Inicio
