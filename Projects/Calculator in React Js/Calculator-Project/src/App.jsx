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
