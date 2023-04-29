import React, { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import axios from "axios";
import { laptops } from "./data";
import { Context } from "./components/Context";
import Product from "./pages/Product";
import { reducer } from "./components/reducer";
const App = () => {
  const [products, setProducts] = React.useState<any[]>([]);
  const [categoryId, setCategoryId] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [sortBy, setSortBy] = React.useState("");
  const [cart, setCart] = React.useState<any[]>([]);
  const [state, dispatch] = useReducer(reducer, cart);
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [userInfo, setUserInfo] = React.useState<any>({});
  const [userActive, setUserActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    setProducts(laptops);
  }, []);

  React.useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        );
        setUserInfo(response.data);
        console.log(userInfo);

        setUserActive(true);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, [userActive]);

  const checkLogin = () => {
    if (email.length > 0 || pass.length > 0) {
      const fetchAuth = async () => {
        try {
          const response = await axios.post(
            "https://api.escuelajs.co/api/v1/auth/login",
            { email: email, password: pass }
          );
          setUserActive(true);
          localStorage.setItem("user", response.data.access_token);
          console.log(response);
        } catch (error) {
          alert("Email and Passport don't match ");

          console.log(error);
        }
      };
      fetchAuth();
    } else {
      alert("You didn't write anything");
    }
  };

  const logOut = () => {
    setUserActive(false);
    localStorage.removeItem("user");
  };

  const value = {
    userInfo,
    logOut,
    userActive,
    checkLogin,
    cart,
    products,
    categoryId,
    setCategoryId,
    search,
    setSearch,
    sortBy,
    setSortBy,
    state,
    dispatch,
    email,
    setEmail,
    pass,
    setPass,
  };

  return (
    <Context.Provider value={value}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="auth" element={<Auth />} />
          <Route path="product/:id" element={<Product />} />
        </Routes>
      </div>
    </Context.Provider>
  );
};

export default App;
