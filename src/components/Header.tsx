import React, { useContext } from "react";
import { FaTimes, FaShoppingCart } from "react-icons/fa";
import { Context } from "./Context";
import MyInput from "./UI/MyInput";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const value = useContext(Context);
  const [exit, setExit] = React.useState(false);
  return (
    <div className="header">
      <Link to="/">Ноутбуки</Link>
      <div className="headerSearch">
        <MyInput
          type="text"
          value={value?.search}
          onChange={(e: any) => value?.setSearch(e.target.value)}
        />

        {value?.search.length > 0 ? (
          <span onClick={() => value?.setSearch("")}>
            <FaTimes />
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="headerRight">
        <div className="headerRightItem">
          <p>
            <Link to="cart">
              <FaShoppingCart />
            </Link>
          </p>
        </div>

        <div className="headerRightUser">
          {!value?.userActive ? (
            <Link to="auth">
              <FaRegUserCircle />
              <span>User</span>
            </Link>
          ) : (
            <p onClick={() => setExit(!exit)}>
              <img src={value?.userInfo.avatar} alt="" />
              <span>{value?.userInfo.name}</span>
              {exit ? (
                <span className="exit" onClick={() => value.logOut()}>
                  Exit
                </span>
              ) : (
                ""
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
