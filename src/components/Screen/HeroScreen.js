/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useRef } from "react";
import useCanvas from "./useCanvas";

import "./HeroScreen.css";
import allegroTechLogo from "./allegro-tech-logo.png";

const allegroTechImg = new Image();
allegroTechImg.src = allegroTechLogo;

const HeroScreen = (props) => {
  const { bodyParts, bodyPartState, emptyBodyPart, options } = props;
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (const bodyPartName in bodyPartState) {
      const bodyPartVariant = bodyPartState[bodyPartName];
      let variantImage = bodyParts[bodyPartName][bodyPartVariant];
      if (!variantImage) {
        variantImage = emptyBodyPart;
      }
      ctx.drawImage(
        variantImage,
        -2 * Math.sin(frameCount * 0.08),
        -2 * Math.sin(frameCount * 0.08),
        326 + 4 * Math.sin(frameCount * 0.08),
        310 + 4 * Math.sin(frameCount * 0.08)
      );
    }
  };

  const drawLogo = (canvas) => {
    canvas.getContext("2d").drawImage(allegroTechImg, 200, 5, 120, 25);
  };

  const canvasRef = useCanvas(draw, options);
  const anchorRef = useRef(null);

  const download = () => {
    drawLogo(canvasRef.current);

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
      <div className="download-pad">
        <button className="download" onClick={download} />
        <a download="hero.png" ref={anchorRef} style={{ display: "none" }}></a>
      </div>
    </div>
  );
};

export default HeroScreen;
