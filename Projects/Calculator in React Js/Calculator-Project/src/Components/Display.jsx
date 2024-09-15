import style from "./Display.module.css";
const Display = ({ calVal }) => { 
  return (
    <input type="text" value={calVal} className={style.display} readOnly />
  );
};

export default Display;
