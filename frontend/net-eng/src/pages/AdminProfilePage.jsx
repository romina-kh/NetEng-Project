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
      {/* Info */}
      <div className={styles.adminprofileCard}>
        <img
          src="https://i.pravatar.cc/150?img=3"
          alt="admin"
          className={styles.adminavatar}
        />
        <h2>بهرام باقری</h2>
        <p>admin@email.com</p>
        <span>ادمین اصلی</span>
      </div>

      {/* Add Store */}
      <div className={styles.maincard}>
        <h3>اضافه کردن فروشگاه</h3>
        <input
          className={styles.admin_input}
          type="text"
          placeholder="نام فروشگاه مدنظر را وارد کنید"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
        <button className={styles.adminbutton} onClick={handleAddStore}>اضافه کردن</button>

         {/* Stores List */}
        <div className={styles.admincard}>
            <h3>لیست فروشگاه ها</h3>
            {stores.length === 0 ? (
            <p className={styles.empty}>هیچ فروشگاهی اضافه نشده است</p>
            ) : (
            stores.map((store, index) => (
                <div key={index} className={styles.adminlistItem}>
                {store}
                </div>
            ))
            )}
        </div>
      </div>

      {/* Add Product */}
      <div className={styles.maincard}>
        <h3>اضافه کردن محصول</h3>
        <input
          className={styles.admin_input}
          type="text"
          placeholder="نام محصول مدنظر را وارد کنید"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input 
          className={styles.admin_input}
          type="number"
          placeholder="مبلغ"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button className={styles.adminbutton} onClick={handleAddProduct}>اضافه کردن</button>
        {/* Products List */}
        <div className={styles.admincard}>
            <h3>لیست محصولات</h3>
            {products.length === 0 ? (
            <p className={styles.empty}>هیچ محصولی اضافه نشده است</p>
            ) : (
            products.map((product, index) => (
                <div key={index} className={styles.adminlistItem}>
                {product.name} - ${product.price}
                </div>
            ))
            )}
        </div>
      </div>
    </div>
  );
}
