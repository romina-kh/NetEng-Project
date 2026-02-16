const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={`/images/${product.Picture}`} alt={product.Image} />
      <div className="card-content">
        <h3>{product.OS}</h3>
        <h4>{product.Storage}</h4>
        <p className="price">
          {product.Price?.toLocaleString()} تومان ماهانه
        </p>
        <button>افزودن به سبد خرید</button>
      </div>
    </div>
  );
};

export default ProductCard;