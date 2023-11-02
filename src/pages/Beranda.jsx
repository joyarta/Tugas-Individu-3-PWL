// component
import { Curious } from "../components/Assets";
import { ThemeContext } from "../context/themeContext";
import { AddButton, MinButton, ResetButton } from "../components/Button";

// library
import React, { useContext, useState } from "react";
import { ScreenContext } from "../context/screenContenxt";

const Beranda = () => {
  const { theme } = useContext(ThemeContext);
  const { screenSize } = useContext(ScreenContext);

  return (
    <>
      <main className={theme}>
        <div className="container row item-center">
          <Curious />
          <div className="container column">
            <h1>What is React ???</h1>
            <p>The library for web and native user interfaces</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Beranda;
