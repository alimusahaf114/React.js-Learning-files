import style from "./WelcomeMessage.module.css";
export default function WelcomeMessage() {
  return (
    <p className={style.welcome}>
      {" "}
      You have nothing to do <br /> Enjoy your day 😍{" "}
    </p>
  );
}
