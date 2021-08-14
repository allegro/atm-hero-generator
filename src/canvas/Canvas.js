/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useRef } from "react";
import useCanvas from "./useCanvas";

const Canvas = (props) => {
  const { draw, options, ...rest } = props;
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
    <div>
      <canvas id="character-canvas" ref={canvasRef} {...rest} />
      <button onClick={download}>Download character</button>
      <a download="hero.png" ref={anchorRef} style={{ display: "none" }}></a>
    </div>
  );
};

export default Canvas;
