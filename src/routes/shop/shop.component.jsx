import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import Productscard from "../../components/products-card/products-card.component";
import "./shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-conatiner">
      {products.map((products) => {
        return <Productscard key={products.id} products={products} />;
      })}
    </div>
  );
};

export default Shop;
