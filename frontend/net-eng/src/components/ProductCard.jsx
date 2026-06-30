import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    console.log(product)
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <img src={`/images/${product.picture}`} alt={product.Image} />
      <div className="card-content">
        <h3>{product.os}</h3>
        <h4>{product.Storage}</h4>
        <p className="price">
          {product.price?.toLocaleString()} تومان ماهانه
        </p>
        <button>افزودن به سبد خرید</button>
      </div>
    </Link>
  );
};

export default ProductCard;