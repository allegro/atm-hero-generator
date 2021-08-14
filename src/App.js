import { useState } from "react";

import { BodyParts, EmptyBodyPart, DefaultBodyParts } from "./characters";
import Canvas from "./canvas/Canvas";

import "./App.css";
import BodyPartChooser from "./components/BodyPartChooser";
import BodyPartVariantChooser from "./components/BodyPartVariantChooser";

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

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(256, 256, 100 * Math.sin(frameCount * 0.03) ** 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#aa8e29";
    ctx.fill();

    for (const bodyPartName in bodyPartState) {
      const bodyPartVariant = bodyPartState[bodyPartName];
      let variantImage = BodyParts[bodyPartName][bodyPartVariant];
      if (!variantImage) {
        variantImage = EmptyBodyPart;
      }
      ctx.drawImage(variantImage, 0, 0);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "start" }}>
          <div style={{ width: "512px" }}>
            <Canvas draw={draw} options={{ width: 512, height: 512 }} />
          </div>
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
