import "./App.css";
import Products from "./components/Products";
import { Fragment } from "react";
import data from "./data.json";

function App() {
  return (
    <Fragment>
      <Products products={data}></Products>
    </Fragment>
  );
}

export default App;
