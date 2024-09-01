import Galery from "./Galery";
// import utils

export default function Profile() {
  return (
    <Galery
      size={40}
      person={{
        name: "Musahaf Ali",
      }}
    />
  );
}

// export default function Profile({
//   name,
//   src,
//   alt,
//   className,
//   size,
//   profession,
//   awards,
//   discovery,
// }) {
//   return (
//     <section className="Profile">
//       <h1>{name}</h1>
//       <img
//         src={src}
//         alt={alt}
//         className={className}
//         width={size}
//         height={size}
//       />
//       <ul>
//         <li>
//           <b>Profession: </b>
//           {profession}
//         </li>
//         <li>
//           <b>Awads:</b>
//           {awards}
//         </li>
//         <li>
//           <b>Discovered:</b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   );
// }
