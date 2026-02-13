import React, { useState } from "react";
import styles from "../styles/profilePages/adminprofile.module.css"

export default function AdminProfile() {
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);

  const [storeName, setStoreName] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddStore = () => {
    if (!storeName) return;
    setStores([...stores, storeName]);
    setStoreName("");
  };

  const handleAddProduct = () => {
    if (!productName || !productPrice) return;
    setProducts([...products, { name: productName, price: productPrice }]);
    setProductName("");
    setProductPrice("");
  };

  return (

    <div className={styles.adminContainer}>
      {/* Admin Info */}
      <div className={styles.profileCard}>
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="admin"
          className={styles.avatar}
        />
        <h2>Admin Name</h2>
        <p>admin@email.com</p>
        <span>Super Admin</span>
      </div>

      {/* Add Store */}
      <div className={styles.maincard}>
        <h3>Add Store</h3>
        <input
          type="text"
          placeholder="Store Name"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
        <button onClick={handleAddStore}>Add Store</button>

         {/* Stores List */}
        <div className={styles.card}>
            <h3>Stores</h3>
            {stores.length === 0 ? (
            <p className={styles.empty}>No stores added</p>
            ) : (
            stores.map((store, index) => (
                <div key={index} className={styles.listItem}>
                {store}
                </div>
            ))
            )}
        </div>
      </div>

      {/* Add Product */}
      <div className={styles.maincard}>
        <h3>Add Product</h3>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
        {/* Products List */}
        <div className={styles.card}>
            <h3>Products</h3>
            {products.length === 0 ? (
            <p className={styles.empty}>No products added</p>
            ) : (
            products.map((product, index) => (
                <div key={index} className={styles.listItem}>
                {product.name} - ${product.price}
                </div>
            ))
            )}
        </div>
      </div>

     

      
    </div>
  );
}
