import { useState } from "react";

import bodyParts from "./characters";
import Canvas from "./canvas/Canvas";

import "./App.css";

function App() {
  const [back, setBack] = useState("capeGreen");
  const [body, setBody] = useState("blueFemale");
  const [top, setTop] = useState("none");
  const [down, setDown] = useState("none");
  const [shoes, setShoes] = useState("none");
  const [head, setHead] = useState("blue1");
  const [eyes, setEyes] = useState("skeleton");
  const [eyebrows, setEyebrows] = useState("none");
  // const [eyegear, setEyegear] = useState('none')
  const [mouth, setMouth] = useState("mouthSmile1");
  const [hair, setHair] = useState("none");
  const [facialHair, setFacialHair] = useState("none");
  const [headGear, setHeadGear] = useState("none");
  const [accessoryLeft, setAccessoryLeft] = useState("magicAlien");
  const [accessoryRight, setAccessoryRight] = useState("none");

  const bodyPartToUpdateFunctionMap = {
    back: setBack,
    body: setBody,
    top: setTop,
    down: setDown,
    shoes: setShoes,
    head: setHead,
    eyes: setEyes,
    eyebrows: setEyebrows,
    mouth: setMouth,
    hair: setHair,
    facialHair: setFacialHair,
    headGear: setHeadGear,
    accessoryLeft: setAccessoryLeft,
    accessoryRight: setAccessoryRight,
  };

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(95, 90, 70 * Math.sin(frameCount * 0.03) ** 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#aa8e29";
    ctx.fill();

    ctx.drawImage(bodyParts["back"][back], 0, 0);
    ctx.drawImage(bodyParts["body"][body], 0, 0);
    ctx.drawImage(bodyParts["top"][top], 0, 0);
    ctx.drawImage(bodyParts["down"][down], 0, 0);
    ctx.drawImage(bodyParts["shoes"][shoes], 0, 0);
    ctx.drawImage(bodyParts["head"][head], 0, 0);
    ctx.drawImage(bodyParts["eyes"][eyes], 0, 0);
    ctx.drawImage(bodyParts["eyebrows"][eyebrows], 0, 0);
    // ctx.drawImage(bodyParts['eyegear'][eyegear], 0, 0);
    ctx.drawImage(bodyParts["mouth"][mouth], 0, 0);
    ctx.drawImage(bodyParts["hair"][hair], 0, 0);
    ctx.drawImage(bodyParts["facialHair"][facialHair], 0, 0);
    ctx.drawImage(bodyParts["headGear"][headGear], 0, 0);
    ctx.drawImage(bodyParts["accessoryLeft"][accessoryLeft], 0, 0);
    ctx.drawImage(bodyParts["accessoryRight"][accessoryRight], 0, 0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>ATM Character Generator</p>
        <div>
          <Canvas draw={draw} options={{ width: 512, height: 512 }} />
          {Object.entries(bodyParts).map(([bodyPartName, bodyPartyImages]) => (
            <div>
              <p>{bodyPartName}</p>
              {Object.entries(bodyPartyImages).map(([name, image]) => (
                <button
                  onClick={() =>
                    bodyPartToUpdateFunctionMap[bodyPartName](name)
                  }
                >
                  {name}
                </button>
              ))}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
