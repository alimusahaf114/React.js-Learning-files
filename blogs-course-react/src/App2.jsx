import RenderingLists from "./Components/RendringLists";
import App from "./ChallengeNo1/App.jsx";
import Recipe from "./PureFunction/Recipe.jsx";
export default function App2() {
  // const people = [
  //   "My name is Musahaf Ali",
  //   "My father name is Ghulam Murtaza",
  //   "My village name is Dengan Bhurgari",
  //   "Ghulam Mohammad Bhurgri was the barrister",
  // ];

  // const people = [
  //   {
  //     id: 0,
  //     name: "Musahaf Murtaza ",
  //     profession: "Programmer",
  //   },
  //   {
  //     id: 1,
  //     name: "Asif Murtaza ",
  //     profession: "Gamer",
  //   },
  //   {
  //     id: 2,
  //     name: "Amir Murtaza ",
  //     profession: "Programmer",
  //   },
  //   {
  //     id: 3,
  //     name: "Zafar Murtaza ",
  //     profession: "Hafiz - e - Quran ",
  //   },
  // ];
  // const chemists = people.filter(
  //   (person) => person.profession === "Programmer"
  // );
  // const listItem = chemists.map((person) => (
  //   <li key={person.id}>{person.name + "-" + person.id}</li>
  // ));
  // const listItem = people.map((person, index) => <li key={index}>{person}</li>);
  return (
    <div>
      {/* <App></App> */}
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2}></Recipe>
      <h2>For a gathering</h2>
      <Recipe drinkers={4}></Recipe>
      {/* <RenderingLists list={listItem}></RenderingLists> */}
    </div>
  );
}
