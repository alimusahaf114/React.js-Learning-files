import style from "./item.module.css";
const Item = ({ EatingItems, bought, handleByButton }) => {
  return (
    <li className={`${style["kg-item"]} list-group-item ${bought && "active"}`}>
      {" "}
      <span className={`${style["kg-span"]}`}>{EatingItems}</span>
      <button
        className={`${style.button} btn btn-info `}
        onClick={handleByButton}
      >
        {" "}
        Buy{" "}
      </button>
    </li>
  );
};

export default Item;
