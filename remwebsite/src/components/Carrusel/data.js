import rem1 from './img/rem1.png';
import rem2 from './img/rem2.png';
import rem3 from './img/rem3.png';

export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  
  export const productData = [
    {
      id: 1,
      imageurl:
        rem1,
      name: "REM ISOLATE",
      price: "$720.00",
      description: "Some text about the product..",
    },
    {
      id: 2,
      imageurl:
        rem2,
      name: "REM CLASSIC",
      price: "$490.00",
      description: "Some text about the product..",
    },
    {
      id: 3,
      imageurl:
        "https://cdn.shopify.com/s/files/1/0463/5803/6638/products/creatina-creapure--bores.png?v=1676190499",
      name: "REMNEWED",
      price: "$400.00",
      description: "Some text about the product..",
    },
    {
      id: 4,
      imageurl:
        rem3,
      name: "GORRA REM",
      price: "$420.00",
      description: "Some text about the product..",
    },
  ];