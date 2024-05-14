import { useEffect, useState } from "react";
import "./App.css";
import DGXContainer from "./components/DGXContainer";
import DGXDropdown from "./components/DGXDropdown";
import DGXLogo from "./components/DGXLogo";
import "./fonts/font.css";
import dropdownList from "./mock/drop-items.json";
import formData from "./mock/form-data.json";

function App() {
  const [result, setResult] = useState("هیچ!");
  const [list, setList] = useState([]);

  const changedDropdownValue = (item) => {
    setResult(item.name);
  };
  useEffect(() => {
    setList(dropdownList);
  }, []);

  return (
    <div
      id="app"
      className="flex"
      style={{ backgroundImage: 'url("/assets/pixel-arts/pixel-wall.png")' }}
    >
      <DGXContainer className="top">
        <DGXLogo className="flex" />
        <div className="mt">
          <DGXDropdown
            list={list}
            action={changedDropdownValue}
            defaultValue={formData?.dropdown}
          />
        </div>
        <div className="result">{result}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
