import Display from "./Components/Display";
import ButtonContainer from "./Components/ButtonContainer";
// import Buttons from "./Components/buttons";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";

function App() {
  return (
    <center>
      <div className={style.calculator}>
        <Display></Display>
        <ButtonContainer></ButtonContainer>
      </div>
    </center>
  );
}

export default App;
