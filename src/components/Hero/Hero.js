import React from 'react';
import './Hero.css';
import Navigation from '../Navigation/Navigation';
import Comprar from '../Comprar/Comprar';
import Productos from '../Productos/Productos';
import Footer from '../Footer/Footer';
import Somos from '../Somos/Somos';
import Contacto from '../Contacto/Contacto';
import Comments from '../Comments/Comments';


function Hero() {
    return (
    <div>
        <Navigation />
        <main>
            <Productos />
            <Comprar />
            <Somos />
            <Contacto />
            <Comments />
        </main>
        
        <footer>
            <Footer />
        </footer>

    </div>
  );
}
export default Hero;