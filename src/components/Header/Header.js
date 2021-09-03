import { memo } from "react";

import logo from "./logo.png";
import cloud1 from "./cloud_1.png";
import cloud2 from "./cloud_2.png";
import cloud3 from "./cloud_3.png";

import "./Header.css";

const availableCloudShapes = [cloud1, cloud2, cloud3];
const numberOfClouds = 10 + Math.floor(Math.random() * 10);

const getCloudClass = (idx) => {
  let cloudClass = "cloud";
  if (idx % 2 === 0 && idx % 3 === 0) {
    cloudClass += " cloud-fast";
  } else if (idx % 2 === 0) {
    cloudClass += " cloud-regular";
  } else {
    cloudClass += " cloud-slow";
  }
  return cloudClass;
};

const getHorizantalPosition = () => 40 * Math.floor(Math.random() * 7);

const Header = memo(() => {
  const cloudsToDraw = [];
  for (let i = 0; i < numberOfClouds; i++) {
    cloudsToDraw.push(availableCloudShapes[i % availableCloudShapes.length]);
  }

  return (
    <header>
      <div className="clouds">
        {cloudsToDraw.map((cloud, idx) => {
          const style = {
            top: `${getHorizantalPosition()}px`,
          };
          return (
            <img
              src={cloud}
              key={idx}
              alt=""
              className={getCloudClass(idx)}
              style={style}
            />
          );
        })}
      </div>
      <img src={logo} alt="Allegro Tech Meeting 14"></img>
    </header>
  );
});

export default Header;
