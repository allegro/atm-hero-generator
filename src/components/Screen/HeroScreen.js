/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useRef } from "react";
import useCanvas from "./useCanvas";

import "./HeroScreen.css";

const HeroScreen = (props) => {
  const { bodyParts, bodyPartState, emptyBodyPart, options } = props;
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(256, 256, 100 * Math.sin(frameCount * 0.03) ** 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#aa8e29";
    ctx.fill();

    for (const bodyPartName in bodyPartState) {
      const bodyPartVariant = bodyPartState[bodyPartName];
      let variantImage = bodyParts[bodyPartName][bodyPartVariant];
      if (!variantImage) {
        variantImage = emptyBodyPart;
      }
      ctx.drawImage(variantImage, 0, 0);
    }
  };

  const canvasRef = useCanvas(draw, options);
  const anchorRef = useRef(null);

  const download = () => {
    anchorRef.current.setAttribute(
      "href",
      canvasRef.current
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream")
    );
    anchorRef.current.click();
  };

  return (
    <div className="HeroScreen-container">
      <canvas ref={canvasRef} />
      <button onClick={download}>Download character</button>
      <a download="hero.png" ref={anchorRef} style={{ display: "none" }}></a>
    </div>
  );
};

export default HeroScreen;
