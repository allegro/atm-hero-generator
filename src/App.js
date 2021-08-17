import { useState } from "react";

import { BodyParts, EmptyBodyPart, DefaultBodyParts } from "./characters";
import HeroScreen from "./components/Screen/HeroScreen";

import "./App.css";
import BodyPartChooser from "./components/Chooser/BodyPartChooser";
import BodyPartVariantChooser from "./components/Chooser/BodyPartVariantChooser";

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

  const [selectedBodyPart, selectBodyPart] = useState("back");

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "start" }}>
          <HeroScreen
            bodyParts={BodyParts}
            bodyPartState={bodyPartState}
            emptyBodyPart={EmptyBodyPart}
            options={{ width: 326, height: 310 }}
          />
          <BodyPartChooser
            selectedBodyPart={selectedBodyPart}
            selectBodyPart={selectBodyPart}
            bodyPartList={Object.keys(DefaultBodyParts)}
          />
          <BodyPartVariantChooser
            bodyPartVariants={BodyParts[selectedBodyPart]}
            selectVariant={bodyPartSetState[selectedBodyPart]}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
