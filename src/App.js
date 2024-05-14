import { useState } from "react";
import "./App.css";
import DGXContainer from "./components/DGXContainer";
import DGXDropdown from "./components/DGXDropdown";
import DGXLogo from "./components/DGXLogo";
import "./fonts/font.css";
import dropdownList from "./mock/drop-items.json";
import formData from "./mock/form-data.json";

function App() {
  const [result, setResult] = useState("هیچ!");
  const [list, setList] = useState(dropdownList || []);

  const changedDropdownValue = (item) => {
    setResult(item.name);
  };

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
            renderInput={(item) => (
              <div className="flex between align-center">
                {item?.name}({item.brand})
                <img
                  width="40px"
                  height="30px"
                  src={item.img}
                  alt={`${item.name}-${item.brand}`}
                />
              </div>
            )}
            renderComponent={(list, selectItem) => {
              return (
                <div className="list size color">
                  {list.map((item) => (
                    <div
                      onClick={() => selectItem(item)}
                      key={`${item.name}-${item.key}}`}
                      className="flex between align-center item size text"
                    >
                      {item?.name}({item.brand})
                      <img
                        width="40px"
                        height="30px"
                        src={item.img}
                        alt={`${item.name}-${item.brand}`}
                      />
                    </div>
                  ))}
                </div>
              );
            }}
          />
        </div>
        <div className="result">{result}</div>
      </DGXContainer>
    </div>
  );
}

export default App;
