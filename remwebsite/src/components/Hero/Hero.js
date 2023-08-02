import React from 'react';
import './Hero.css';
import Navigation from '../Navigation/Navigation';
import Comprar from '../Comprar/Comprar';
import Productos from '../Productos/Productos';
import Footer from '../Footer/Footer';
import Somos from '../Somos/Somos';
import Contacto from '../Contacto/Contacto';


function Hero() {
    return (
    <div>
        <Navigation />
        <main>
            <Productos />
            <Comprar />
            <Somos />
            <Contacto />
        </main>
        
        <footer>
            <Footer />
        </footer>

    </div>
  );
}
export default Hero;