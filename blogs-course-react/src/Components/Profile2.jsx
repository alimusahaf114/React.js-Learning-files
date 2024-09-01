export default function Profile2({ size, className, src2 }) {
  return (
    <div>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className={className}
          src={src2}
          alt="Katsuko Saruhashi"
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
