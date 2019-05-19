import React from "react";
import "./App.scss";
import { useGlobalState, Provider } from "./redux";
import reducer from "./reducer";
import ChildComponent from "./ChildComponent";

const App = () => {
  const globalState = useGlobalState({ count: 0, anothercount: 1 }, reducer);
  return (
    <Provider initialValue={globalState}>
      <div className="app">
        <h2>Welcome to React!</h2>
        <h2>{globalState.count}</h2>
        <button type="button" onClick={() => globalState.dispatch({ type: "increment" })}>
          Click me to plus one!
        </button>
      </div>
      <ChildComponent />
    </Provider>
  );
};

export default App;