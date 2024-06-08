import React from "react";

const Header = ({ lang, email }) => {
  return (
    <>
      <h1 className="font-bold text-2xl md:text-4xl">
        👋 {lang === "es" ? "Bienvenido de nuevo" : "Welcome back"}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-500">
          {" "}
          {email}
        </span>
      </h1>
      <p className="text-base md:text-xl py-2">
        {lang === "es" ? "Estamos felices de verte aquí" : "We are happy to see you here"}
      </p>
    </>
  );
};

export default Header;
