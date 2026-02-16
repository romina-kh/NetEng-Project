import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import NavBar from "../components/homePage/navbar";
import ProductGrid from "../components/ProductGrid";
import ProductFilters from "../components/ProductFilters";
import "../styles/products.css";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const { products, loading, error } = useProducts(search, category);

  console.log("hibi2", products)

  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <h1 className="title">سرور ها</h1>

        <ProductFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        {loading && <p>در حال بارگذاری...</p>}
        {error && <p className="error">{error}</p>}

        {!loading && !error && <ProductGrid products={products} />}
      </div>
    </>
  );
};

export default ProductsPage;
