import Square from "./components/Square";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <Square colorVal={colorValue} hexVal={hexValue} isDarkTxt={isDarkText} />
      <Input
        colorVal={colorValue}
        setColorVal={setColorValue}
        setHexVal={setHexValue}
        isDarkTxt={isDarkText}
        setIsDarkTxt={setIsDarkText}
      />
    </div>
  );
}

export default App;
