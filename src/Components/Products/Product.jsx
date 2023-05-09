import Stars from "@/UI/Stars";
import styles from "./Product.module.scss";
import Image from "next/image";

import React from "react";

const Product = ({ product, title, roast, stars, reviews, price }) => {
  return (
    <div className={styles.product}>
      <Image
        src={`/product${product}.png`}
        alt={`produto ${product}`}
        width={200}
        height={300}
      />
      <h2>{title}</h2>
      <h3>{roast}</h3>
      <Stars stars={stars} reviews={reviews} />
      <h4>R$ {price}</h4>
    </div>
  );
};

export default Product;
