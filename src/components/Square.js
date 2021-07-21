const Square = ({ colorVal, hexVal, isDarkTxt }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorVal,
        color: isDarkTxt ? "#000" : "#FFF",
      }}
    >
      <p>{colorVal ? colorVal : "Empty value"}</p>
      <p>{hexVal ? hexVal : null}</p>
    </section>
  );
};

Square.defaultProps = {
  colorVal: "Empty Color value",
};

export default Square;
