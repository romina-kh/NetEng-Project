import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetchProducts();
  }, [search, category]);

  const fetchProducts = async () => {
    try {
      let url = "http://localhost:8080/api/v1/product/servers";
      // let url = "http://localhost:8080";


      if (search) url += `search=${search}&`;
      if (category !== "all") url += `category=${category}`;

      console.log("hiiii")
      const res = await fetch(url);
      console.log(res)
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>لیست محصولات</h2>

      {/* سرچ */}
      <input
        type="text"
        placeholder="جستجوی محصول..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />

      {/* دسته‌بندی */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "10px" }}
      >
        <option value="all">همه دسته‌ها</option>
        <option value="electronics">الکترونیک</option>
        <option value="clothes">پوشاک</option>
      </select>

      {/* لیست محصولات */}
      <div style={{ marginTop: "30px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "10px" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()} تومان</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;