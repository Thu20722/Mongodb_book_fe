import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperTypeProduct,
  WrapperTypeProductItem,
  WrapperButtonMore,
  WrapperProduct,
} from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import anh1 from "../../assets/images/anh1.png";
import anh2 from "../../assets/images/anh2.png";
import anh3 from "../../assets/images/anh3.png";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent.jsx";

const HomePage = () => {
  const arr = [
    "Truyện",
    "Thiếu nhi",
    "Tâm lý, tình cảm",
    "Lịch sử",
    "Văn hóa, xã hội",
    "Kinh dị",
    "Khoa học viễn tưởng",
    "Thời trang",
    "Giáo dục",
  ];

  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {/* {arr.map((item) => (
            <WrapperTypeProductItem>
              <TypeProduct name={item} key={item} />
            </WrapperTypeProductItem>
          ))} */}
          {arr.map((item) => (
            <WrapperTypeProductItem key={item}>
              <TypeProduct name={item} />
            </WrapperTypeProductItem>
          ))}
        </WrapperTypeProduct>
        <div
          id="container"
          style={{
            // backgroundColor: "#efefef",
            height: "1000px",
            width: "100%",
          }}>
          <SliderComponent arrImages={[anh1, anh2, anh3]} />
          {/* <WrapperProduct>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProduct> */}
          <WrapperProduct>
            {[...Array(7)].map((_, index) => (
              <CardComponent key={index} />
            ))}
          </WrapperProduct>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}>
            <WrapperButtonMore
              textButton="Xem thêm"
              type="outline"
              styleButton={{
                border: "1px solid black",
                color: "black",
                width: 240,
                height: 38,
                borderRadius: "4px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              styleTextButton={{ fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
