import React from "react";
import { ThemeContextConsumer } from "./ThemeContext";

function Button(props) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <button
          className={`${context.theme}-theme`}
          onClick={context.toggleTheme}
        >
          Switch Theme
        </button>
      )}
    </ThemeContextConsumer>
  );
}

export default Button;
