import React from "react";
import { Context } from "../components/Context";
import MyButton from "../components/UI/MyButton";

const Cart = () => {
  const value = React.useContext(Context);
  const handleCount = (e: any) => {
    console.log(e);
  };
  return (
    <div>
      <div className="cart">
        <h1>Корзина</h1>
        <ul>
          {value?.state.length > 0 ? (
            value?.state.map((obj: any) => (
              <li key={obj.id}>
                <img src={obj.picture} alt="asd " />
                <h3>{obj.title}</h3>
                <span>{obj.price} сум</span>
                <div className="count">
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={obj.count}
                    readOnly
                  />
                </div>
                <span
                  onClick={() =>
                    value.dispatch({ type: "deleteToCart", payload: obj.id })
                  }
                  className="delProduct"
                >
                  X
                </span>
              </li>
            ))
          ) : (
            <p>Not Found...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
