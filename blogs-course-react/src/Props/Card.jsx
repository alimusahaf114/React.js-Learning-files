export default function Card(props) {
  return (
    <div>
      <div className="card">
        {/* <h1>{props.title}</h1> */}
        {props.children}
      </div>
    </div>
  );
}
