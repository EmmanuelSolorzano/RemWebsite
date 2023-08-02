import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 5; // Cambiar a la cantidad total de imágenes que tengas
  const imageRef = useRef(null);

  useEffect(() => {
    // Función para cambiar la imagen cada 2 segundos
    const changeImage = () => {
        imageRef.current.style.opacity = 0; // Establecer la opacidad a 0 para el fade-out
        setTimeout(() => {
          setCurrentImage((prevImage) => (prevImage % totalImages) + 1);
        }, 650); // Esperar 500ms para que se complete el fade-out antes de cambiar la imagen
      };

    const interval = setInterval(changeImage, 4000);

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => clearInterval(interval);
  }, [totalImages]);

    useEffect(() => {
        if (imageRef.current) {
        imageRef.current.style.opacity = 1;
        }
    }, [currentImage]);

  return (
    <div className='cajadatos'>
      <img
        ref={imageRef}
        src={`img/image${currentImage}.png`} // Ajusta la ruta y el formato de la imagen según tus necesidades
        alt={`card ${currentImage}`}
        className='imagen'
        style={{ transition: 'opacity 0.5s ease' }}
      />
    </div>
  );
};

export default ImageSlider;