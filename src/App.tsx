/*import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // function parse(value: Response) {
  //   console.log(value.then);
  // }
  fetch("https://fakestoreapi.com/products")
    .then((val) => val.json())
    .then((obj) => console.log(obj));

  return <div></div>;
}

export default App;*/

/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

import React, { useState } from "react";
import { Product } from "./types/products";
import ProductTile from "./components/ProductTile";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      setProducts(json);
      setLoading(false);
    });

  return ({
    loading ? <span> Loading </span> : 
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return <ProductTile key={product.id} product={product} />;
      })}
    </div>
     } );
}

export default App;

//export default App;
