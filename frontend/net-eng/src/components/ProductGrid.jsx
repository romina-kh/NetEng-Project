import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;