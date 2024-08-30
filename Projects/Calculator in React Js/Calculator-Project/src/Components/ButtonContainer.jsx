import style from "./ButtonCont.module.css";
const ButtonContainer = () => {
  let buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "0",
    ".",
  ];
  return (
    <div>
      <div className={style.buttonContainer}>
        {buttonNames.map((item) => (
          <button className={style.button}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
