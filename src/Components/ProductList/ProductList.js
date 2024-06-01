import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
// import { AddToCart } from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  // Логирование для проверки значений
  console.log('Products:', products);
  console.log('Category:', category);

  // Проверка, что products определен и является массивом
  const validProducts = Array.isArray(products) ? products : [];

  const output = validProducts.filter(product => product.category === category.id)
    .map(product => (
      <div key={product.id} className="product">
        <Link to={"/products/" + product.slug}>
          <img src={product.image} alt={product.name} />
        </Link>
        <hr />
        <Link to={"/products/" + product.slug} className="text">
          {product.name}
        </Link>
        <p>Color: {product.color}</p>

        <br />

        <div className="actions">
          <span>${product.price}</span>
          {/* <AddToCart product={product} /> */}
        </div>
        <DeleteProduct product={product} />
      </div>
    ));

  return (
    <div className="ProductList">
      {output}

      <AddProduct category={category} />
    </div>
  );
}