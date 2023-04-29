import React from "react";
import { useParams } from "react-router-dom";
import { Context } from "../components/Context";
import MyButton from "../components/UI/MyButton";

const Product = () => {
  const value = React.useContext(Context);
  const { id } = useParams<any>();

  if (id !== undefined) {
    const product = value?.products.find((p) => p.id === parseInt(id));
    if (!product) {
      return <div>none</div>;
    } else {
      return (
        <div className="product">
          <ul>
            <li>
              <div className="img">
                <img src={product.picture} alt="" />
              </div>
              <div className="about">
                <h2>{product.title}</h2>
                <h3>{product.category}</h3>
                <p>Экран: {product.screen}</p>
                <p>Процессор: {product.spu}</p>
                <p>Видеокарта: {product.videocart}</p>
                <p>ОЗУ: {product.ozu}</p>
                <p>Накопитель: {product.storagedevice}</p>
                <div>
                  <p>Цена: {product.price} сум</p>
                  <MyButton
                    onClick={() =>
                      value?.dispatch({ type: "addToCart", payload: product })
                    }
                  >
                    Добавить в корзину
                  </MyButton>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    }
  }
  return <></>;
};

export default Product;
