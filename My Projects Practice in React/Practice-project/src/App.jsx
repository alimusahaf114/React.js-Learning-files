import FoodItems from "./Components/FoodItems";
import Heading from "./Components/Heading";
import Logic from "./Components/Logic";
function App() {
  const foodItem = ["Sabzi", "Gosht", "Lasi", "Makhan", "Ataa", "Ghee"];

  return (
    <>
      <Heading></Heading>
      <Logic items={foodItem}></Logic>
      <FoodItems items={foodItem}></FoodItems>
    </>
  );
}

export default App;
