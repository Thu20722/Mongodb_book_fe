import React from "react";
import ProductDetailsComponent from "../../components/ProductDetailsComponent/ProductDetailsComponent";

const ProductDetailsPage = () => {
  return (
    <div style={{ padding: "0 120px" }}>
      <h5 style={{ fontSize: "14px", fontWeight: "500", margin: "10px" }}>
        Trang chủ
      </h5>
      <div>
        <ProductDetailsComponent />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
