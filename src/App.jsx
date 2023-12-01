import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Products from "./pages/products";
import SingleProduct from "./pages/singleProduct";
import ProductsList from "./pages/ProductsList";
import NavBar from "./components/navBar";
import './index.css'

const products = [
  {
      id: "1",
      name: "Doliprane",
      image: "https://dummyimage.com/200x200/000/fff&text=Doliprane",
      description: "Le Doliprane est un médicament contre la douleur et la fièvre couramment utilisé pour soulager les maux de tête, les douleurs musculaires, les courbatures, les douleurs dentaires, les maux de gorge et les fièvres."
  },
  {
      id: "2",
      name: "Aspirine",
      image: "https://dummyimage.com/200x200/000/fff&text=Aspirine",
      description: "L'aspirine est un médicament anti-inflammatoire non stéroïdien (AINS) qui est utilisé pour soulager la douleur, la fièvre et l'inflammation."
  },
  {
      id: "3",
      name: "Ibuprofène",
      image: "https://dummyimage.com/200x200/000/fff&text=Ibuprofene",
      description: "Il est disponible en comprimés, en gélules, en suppositoires et en sirop. La dose recommandée pour les adultes est de 200 à 400 milligrammes par prise, jusqu'à 4 prises par jour"
  }
];

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} >
          <Route index element={<ProductsList newProduct={products} />}/>
          <Route path=":id" element={<SingleProduct newProduct={products} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
