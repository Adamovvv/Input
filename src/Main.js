import React, { useState } from "react";

function Main(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showText, setShowText] = useState(false);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
    setShowText(false);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setShowText(false);
  };

  const handleClick = () => {
    setShowText(true);
  };

  const database = {
    login: "admin",
    password: "admin",
  };

  return (
    <div className="main">
      <input
        type="text"
        value={username}
        onChange={handleChangeUsername}
        placeholder="Логин"
      />
      <input
        type="text"
        value={password}
        onChange={handleChangePassword}
        placeholder="Пароль"
      />
      {showText === true ? (
        <div>
          {username === database.login && password === database.password
            ? "Вы успешно вошли в свой аккаунт"
            : "Неверный логин или пароль"}
        </div>
      ) : null}
      <div className="button">
        <button onClick={handleClick}>Войти</button>
      </div>
    </div>
  );
}

export default Main;
