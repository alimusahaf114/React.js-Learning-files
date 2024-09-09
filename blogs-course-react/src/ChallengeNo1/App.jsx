import { people } from "./Data.jsx";
import { getImageUrl } from "./Utils.jsx";

export default function List() {
  const chemist = people.filter((person) => person.profession === "chemist");
  const nonChemist = people.filter((person) => person.profession !== "chemist");
  const listItems = chemist.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  const listItems2 = nonChemist.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));
  return (
    <article>
      <h1>Chemist</h1>
      <ul>{listItems}</ul>
      <h1>Non - Chemist </h1>
      <ul>{listItems2}</ul>
    </article>
  );
}
