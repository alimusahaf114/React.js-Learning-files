import style from "./ButtonCont.module.css";
const ButtonContainer = ({ onClickButton }) => {
  let buttonNames = [
    "C",
    "√",
    "Sq",
    "Cu",
    "*",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "/",
    "=",
    "0",
    ".",
  ];
  return (
    <div>
      <div className={style.buttonContainer}>
        {buttonNames.map((item) => (
          <button
            key={item}
            className={style.button}
            onClick={() => onClickButton(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonContainer;
