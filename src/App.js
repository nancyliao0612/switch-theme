import React from "react";
import Header from "./Header";
import Button from "./Button";
import { ThemeContextConsumer } from "./ThemeContext";

function App() {
  return (
    <div>
      <Header />
      <ThemeContextConsumer>
        {(theme) => <Button theme={theme} />}
      </ThemeContextConsumer>
      <br />
    </div>
  );
}

export default App;
