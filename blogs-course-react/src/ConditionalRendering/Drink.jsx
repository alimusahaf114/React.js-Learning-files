import style from "./Drink.module.css";
export default function Drink({ name }) {
  let drinkDetails;
  if (name === "tea") {
    drinkDetails = (
      <>
        <table className={style.table}>
          <dl>
            <dt>Part of Plants</dt>
            <dd>Leaf</dd>
            <dt>Caffeine Content</dt>
            <dd>15–70 mg/cup</dd>
            <dt>Age</dt>
            <dd>4,000 + years</dd>
          </dl>
        </table>
      </>
    );
  } else {
    drinkDetails = (
      <>
        <table className={style.table}>
          <dl>
            <dt>Part of Plants</dt>
            <dd>bean</dd>
            <dt>Caffeine Content</dt>
            <dd>80–185 mg/cup</dd>
            <dt>Age</dt>
            <dd>1,000+ years</dd>
          </dl>
        </table>
      </>
    );
  }
  return (
    <div>
      {<h1>{name}</h1>}
      {drinkDetails}
    </div>
  );
}
