import { useState } from "react";

import {
  BodyParts,
  EmptyBodyPart,
  DefaultBodyParts,
  getRandomBodyParts,
} from "./characters";
import Chooser from "./components/Chooser/Chooser";
import Header from "./components/Header/Header";
import HeroScreen from "./components/Screen/HeroScreen";

import "./App.css";

function App() {
  const bodyPartState = {};
  const bodyPartSetState = {};

  for (const bodyPartName in BodyParts) {
    // we iterate over immutable object, thus the order
    // of useState calls is perserved on every rerender
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(DefaultBodyParts[bodyPartName]);
    bodyPartState[bodyPartName] = state;
    bodyPartSetState[bodyPartName] = setState;
  }

  const setRandomCharacter = () => {
    const randomCharacter = getRandomBodyParts();
    for (const bodyPartName in randomCharacter) {
      const randomVariant = randomCharacter[bodyPartName];
      bodyPartSetState[bodyPartName](randomVariant);
    }
  };
  const [selectedBodyPart, selectBodyPart] = useState("top");

  return (
    <div>
      <Header />
      <div className="App">
        <HeroScreen
          bodyParts={BodyParts}
          bodyPartState={bodyPartState}
          emptyBodyPart={EmptyBodyPart}
          options={{ width: 326, height: 310 }}
        />
        <Chooser
          bodyPartList={Object.keys(DefaultBodyParts)}
          selectedBodyPart={selectedBodyPart}
          selectBodyPart={selectBodyPart}
          selectVariant={bodyPartSetState[selectedBodyPart]}
          setRandomCharacter={setRandomCharacter}
        />
      </div>
    </div>
  );
}

export default App;
