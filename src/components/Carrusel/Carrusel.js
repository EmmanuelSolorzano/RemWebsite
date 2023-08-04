import "./Carrusel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";

function Carrusel() {
  const product = productData.map((item) => (
    <Product 
      name={item.name}
      url={item.imageurl}
      price={item.price}
      ingredients={item.ingredients}
      size={item.size}
      flavour={item.flavour}
    />
  ));

  return (
    <div className="App">
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
export default Carrusel;