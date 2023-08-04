import React from 'react';
import './Comprar.css';

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
                    
                        <img src="img/mercadolibre.png" alt="Mercado Libre" loading="lazy"/>
                    
                    
                        <img src="img/amazon.png" alt="Amazon" loading="lazy"/>
                    
                    <a href='https://www.facebook.com/profile.php?id=100094542872082&mibextid=LQQJ4d' className='items'>
                        <img src="img/facebook.png" alt="Facebook" loading="lazy"/>
                    </a>
                </div>
            </div>
        </div>
  );
}
export default Hero;