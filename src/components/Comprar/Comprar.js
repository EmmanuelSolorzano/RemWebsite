import React from 'react';
import './Comprar.css';
import ml from './img/mercadolibre.png';
import am from './img/amazon.png';
import fb from './img/facebook.png';

function Hero() {
    return (
        <div className='comprarbox'>
            <h1 id='comprar' className='titlecomprar'>
                DÓNDE COMPRAR
            </h1>
            <p className='info'>
                Encuentra toda nuestra variedad de productos.
            </p>
            <div className='textocomprar'>
                <div className="grid-container">
                    
                        <img src={ml} alt="Mercado Libre" />
                    
                    
                        <img src={am} alt="Amazon" />
                    
                    <a href='https://www.facebook.com/profile.php?id=100094542872082&mibextid=LQQJ4d' className='items'>
                        <img src={fb} alt="Facebook" />
                    </a>
                </div>
            </div>
        </div>
  );
}
export default Hero;