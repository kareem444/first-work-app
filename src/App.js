import { useEffect, useState } from "react";
import "./App.css";
import CardItem from "./component.js/CardItem";
import ScollComponent from "./component.js/ScollComponent";
import Searchbar from "./component.js/Searchbar";

function App() {
  const [Theuser, setTheuser] = useState([]);
  const [TheInputVal, setTheInputVal] = useState("");
  const [TheSownData, setTheSownData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setTheuser(json);
        setTheSownData(json);
      });
  }, []);

  useEffect(() => {
    const TheData = Theuser.filter(item => {
      return item.name.toLowerCase().includes(TheInputVal.toLowerCase());
    });
    setTheSownData(TheData);
  }, [TheInputVal]);

  return (
    <div className="">
      {/* <div className="text-center mt-3">
        <h1>kareem</h1>
        <Searchbar setTheInputVal={setTheInputVal} />
      </div>
      <ScollComponent>
        <div className="row">
          {Theuser.length === 0 ? (
            <div>loading</div>
          ) : (
            TheSownData.map((item, index) => (
              <div className="col-md-4 col-lg-3 col-sm-6" key={index}>
                <CardItem Theuser={item} />
              </div>
            ))
          )}
        </div>
      </ScollComponent> */}
      <div>
        kareem
      </div>
    </div>
  );
}

export default App;
