import useCanvas from './useCanvas';

const Canvas = (props) => {
  const { draw, options, ...rest } = props;
  const canvasRef = useCanvas(draw, options);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
