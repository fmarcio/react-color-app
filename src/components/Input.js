import colorNames from "colornames";

const Input = ({
  colorVal,
  setColorVal,
  setHexVal,
  isDarkTxt,
  setIsDarkTxt,
}) => {
  const setColorHandler = (event) => {
    setColorVal(event.target.value);
    setHexVal(colorNames(event.target.value));
  };

  const setIsDarkTxtHandler = () => {
    setIsDarkTxt(!isDarkTxt);
  };

  const preventDefaultHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={preventDefaultHandler}>
      <label>Add Color Name</label>
      <input
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorVal}
        onChange={setColorHandler}
      />
      <button type="button" onClick={setIsDarkTxtHandler}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
