import './Productos.css';
import Carrusel from '../Carrusel/Carrusel';
import ImageSlider from './ImageSlider';

function Productos() {
  return (
    <div className='mainboxwhite'>
        <ImageSlider />
        <h1 className='titulo'>
            NUESTROS FAVORITOS
        </h1>
        <div className='texto'>
            <Carrusel />
        </div>
    </div>
  );
}

export default Productos;