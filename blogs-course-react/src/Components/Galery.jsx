// This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

export default function Galery({ person, size }) {
  return (
    <div>
      <img
        className="avatar"
        src="pic.jpg"
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );

  {
    /* <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        src={getImageUrl("szV5sdG")}
        size="200px"
        alt="Avatar"
        profession="physicist and chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovery="polonium (chemical element)"
      ></Profile>
      <Profile
        name="Katsuko Saruhashi"
        src={getImageUrl("YfeOqp2")}
        size="200px"
        alt="Avatar"
        profession="chemist"
        awards="4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovery="polonium (chemical element)"
      ></Profile> */
  }
}
