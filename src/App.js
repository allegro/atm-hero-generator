import { useState } from "react";

import { BodyParts, EmptyBodyPart, DefaultBodyParts } from "./characters";
import Canvas from "./canvas/Canvas";
import download from "./canvas/utils";

import "./App.css";

function App() {
  const bodyPartsState = {};
  for (const bodyPartName in BodyParts) {
    // we iterate over immutable object, thus the order
    // of useState calls is perserved on every rerender
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = useState(DefaultBodyParts[bodyPartName]);
    bodyPartsState[bodyPartName] = { state, setState };
  }

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(256, 256, 100 * Math.sin(frameCount * 0.03) ** 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#aa8e29";
    ctx.fill();

    for (const bodyPartName in bodyPartsState) {
      const bodyPartVariant = bodyPartsState[bodyPartName]["state"];
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
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ width: "512px" }}>
            <Canvas draw={draw} options={{ width: 512, height: 512 }} />
          </div>
          <div style={{ width: "512px", height: "800px", overflow: "scroll" }}>
            {Object.entries(BodyParts).map(
              ([bodyPartName, bodyPartyImages]) => (
                <div>
                  <p>{bodyPartName}</p>
                  {Object.entries(bodyPartyImages).map(([name, image]) => (
                    <button
                      style={{
                        width: "128px",
                        height: "128px",
                        backgroundImage: `url(${image.src})`,
                        backgroundPosition: "center",
                        backgroundSize: "200%",
                      }}
                      onClick={() =>
                        bodyPartsState[bodyPartName]["setState"](name)
                      }
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )
            )}
          </div>
        </div>
        <a id="download" download="triangle.png" key="anchor">
          <button
            id="download-button"
            key="download-button"
            type="button"
            onClick={() => download()}
          >
            Download character
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
