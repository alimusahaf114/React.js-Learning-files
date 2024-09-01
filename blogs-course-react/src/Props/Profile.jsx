import Box from "./Box";
function Profile({ color, size, disabled }) {
  return (
    <div>
      <Box>
        <h1> Hello World </h1>
        <p> My name is Musahaf Ali Kunbhar</p>
      </Box>
      {/* <button style={{ color: color, fontSize: size }} disabled={disabled}>
        {" "}
        Click me
      </button>
      <button></button> */}
    </div>
  );
}

export default Profile;
