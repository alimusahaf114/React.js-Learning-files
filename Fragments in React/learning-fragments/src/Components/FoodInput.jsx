import style from "./FoodInput.module.css";
const FoodInput = ({ onKeyDown }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Custom Item"
        className={style.foodInput}
        onKeyDown={onKeyDown}
      />
    </>
  );
};

export default FoodInput;
