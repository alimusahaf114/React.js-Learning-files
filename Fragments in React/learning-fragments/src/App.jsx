import React, { useState } from "react";
import ErrorMsg from "./Components/ErrorMsg";
import FoodItems from "./Components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./Components/heading.module.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  let [EatingItems, setEatingItems] = useState([]);
  // let [textToShow, setTextState] = useState("Food Item entered");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  function onKeyDown(event) {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newArr = [...EatingItems, newFoodItem];
      setEatingItems(newArr);
    }
  }
  // let textToShow = "Hi my name is Musahaf Ali";
  // textToShow.innerText = texo();

  return (
    <>
      <Container>
        <h1>HEALTHY FOOD</h1>
        <FoodInput onKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg items={EatingItems}></ErrorMsg>
        <FoodItems items={EatingItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
