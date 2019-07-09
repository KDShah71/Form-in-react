import React from "react";
import "./normalize.css";
import "./App.css";
import Form from "./components/Form";

import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <Form />
    </StyletronProvider>
  );
}

export default App;
