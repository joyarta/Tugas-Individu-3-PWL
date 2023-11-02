import React, { useContext, useEffect, useState } from "react";
import { DirectButton, ScrollTop } from "../components/Button";
import { ThemeContext } from "../context/themeContext";
import { Curious, ExampleComponent, ExampleCodeandMarkup, Examplewherever } from "../components/Assets";

const Tentang = () => {
  const { theme } = useContext(ThemeContext);
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setShowScrollButton(true) : setShowScrollButton(false);
    });
  }, []);
  return (
    <>
      <main className={theme}>
        {showScrollButton && (
          <ScrollTop
            actions={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        )}
        <h1 className="text-center">Create user interfaces from components</h1>
        <ExampleCodeandMarkup />
        <div className="container column minimal-gap">
          <div className="container column minimal-gap">
            <p>React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.</p>
            <div className="container row">
              <section className="container column  minimal-gap item-center">
                <h1>Write components with code and markup</h1>
                <ExampleComponent />
                <p>React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming. </p>
              </section>
              <section className="container column  minimal-gap item-center">
                <h1>Add interactivity wherever you need it</h1>
                <Examplewherever />
                <p>React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.</p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tentang;
