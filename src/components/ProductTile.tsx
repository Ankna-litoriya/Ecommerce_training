import React from "react";
import { Product } from "../types/products";
import { Rating } from "../types/products";

interface ProductTileProps {
  product: Product;
}

function ProductTile({ product }: ProductTileProps) {
  const DESCRIPTION_LENGTH = 200;

  const description =
    product.description.length > DESCRIPTION_LENGTH
      ? product.description.substring(0, DESCRIPTION_LENGTH) + "..."
      : product.description;

  //const row = 

  return (
    <div
      style={{
        width: 350,
        height: 350,
        border: "1px solid black",
        margin: 10,
        display: "flex",
        flex: "0 0 auto",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div>
        <img src={product.image} alt={product.title} height={50} width={50} />
      </div>

      <span>{product.title}</span>
      <div>{description}</div>
      <div style={{
        display: "flex",
        gap: 30,
      }}>
      <div>{product.rating.rate }</div>
      <div>Rs.{product.price}</div>
      </div>
      <div>
        <button>Add to cart</button>
      </div>

    </div>
    // Image at the top
    // Title
    // Description
    // Row => Rating at the left, Price at the right
    // Button => Add to cart
  );
}

export default ProductTile;