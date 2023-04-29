import React from "react";
import { Context } from "../components/Context";
import MyButton from "../components/UI/MyButton";
import MyInput from "../components/UI/MyInput";

const Auth = () => {
  const handleForm = (e: any) => {
    e.preventDefault();
  };
  const value = React.useContext(Context);
  return (
    <div className="auth">
      <form onSubmit={handleForm}>
        <h1>Авторизация</h1>
        <div className="inputItem">
          <span>Email</span>
          <MyInput
            value={value?.email}
            onChange={(e) => value?.setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className="inputItem">
          <span>Password</span>
          <MyInput
            value={value?.pass}
            onChange={(e) => value?.setPass(e.target.value)}
            type="password"
          />
        </div>
        <MyButton onClick={() => value?.checkLogin()}>Login</MyButton>
      </form>
    </div>
  );
};

export default Auth;
