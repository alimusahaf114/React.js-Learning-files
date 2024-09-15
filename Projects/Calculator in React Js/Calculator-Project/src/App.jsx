import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
// import Buttons from "./Components/buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("");
  const onClickButton = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "√") {
      let squareRoot = Math.sqrt(calVal);
      setCalVal(squareRoot);
    } else if (buttonText === "Sq") {
      let square = Math.pow(calVal, 2);
      setCalVal(square);
    } else if (buttonText === "Cu") {
      let Cube = Math.pow(calVal, 3);
      setCalVal(Cube);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <center>
      <div className={style.calculator}>
        <Display calVal={calVal}></Display>
        <ButtonContainer onClickButton={onClickButton}> </ButtonContainer>
      </div>
    </center>
  );
}

export default App;
