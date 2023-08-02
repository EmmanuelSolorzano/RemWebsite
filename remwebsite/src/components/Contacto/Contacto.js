import './Contacto.css';

function Contacto() {
  return (
    <div className='contactobox'>
        <h1 className='contactotitlebox' id='contacto'>
            ¡CONTÁCTANOS!
        </h1>
        <div className='contactotextobox'>
            <div>
                <h2>
                    Redes sociales
                </h2>
                <a style={{
                textDecoration: 'none', // Quita el subrayado del enlace
                color: 'inherit', // Utiliza el color heredado (por defecto) del elemento padre
                }} href='https://www.facebook.com/profile.php?id=100094542872082&mibextid=LQQJ4d'>
                <svg xmlns="http://www.w3.org/2000/svg" className='svgcontacto' fill="currentColor" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" id="mainIconPathAttribute"></path> </svg>
                </a>
            </div>
            <div>
                <h2>
                    Contacto
                </h2>
                <p>
                    Teléfono:<br/> <a className='textocontacto' href='tel:3111345235'>3111345235</a><br/>
                    E-mail:<br/> <a className='textocontacto' href='mailto:ventas@remsport.mx'>ventas@remsport.mx</a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Contacto;