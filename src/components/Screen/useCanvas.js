import { useRef, useEffect } from "react";

const useCanvas = (draw, options = { width: 100, height: 100 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { width, height } = options;
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    const context = canvasRef.current.getContext("2d");
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, options]);

  return canvasRef;
};

export default useCanvas;
