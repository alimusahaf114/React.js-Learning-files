export default function Recipe({ drinkers }) {
  return (
    <>
      <ol>
        <li>Boil {drinkers} cups of Water</li>
        <li>
          {" "}
          Add {drinkers} spoons of tea {0.5 * drinkers} spoons of water{" "}
        </li>
        <li> Add {0.5 * drinkers} cup of milk to boil the sugar to taste</li>
      </ol>
    </>
  );
}
