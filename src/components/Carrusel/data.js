
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
        "img/rem1.png",
      name: "REM ISOLATE",
      price: "$890.00",
      ingredients: "Proteína aislada, Leche descremada, Goma xantana, Vitamina C, Vitamina D, L-Glutamina, Sucralosa, Cúrcuma, Stevia, Probióticos.",
      flavour:"Vainilla Francesa",
      size:"2 Kg.",
    },
    {
      id: 2,
      imageurl:
        "img/rem2.png",
      name: "REM CLASSIC",
      price: "$690.00",
      ingredients: "Whey protein, Cacao orgánico, Cacao, Goma xantana, Vitamina C, Vitamina D, Zinc, Jengibre, L-Carnitina, Cúrcuma, Stevia, Probióticos.",
      flavour:"Chocolate Irlandés",
      size:"2 Kg.",
    },
    {
      id: 3,
      imageurl:
        "img/rem4.png",
      name: "Creatina",
      price: "$590.00",
      ingredients: "Monohidrato de Creatina Micronizada.",
      flavour:"Natural",
      size:"400 g.",
    },
    {
      id: 4,
      imageurl:
        "img/rem3.png",
      name: "GORRA REM",
      price: "$420.00",
    },
  ];