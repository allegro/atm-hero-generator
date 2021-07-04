import logo from './logo.svg';
import Canvas from './canvas/Canvas';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = count % 2 === 0 ? '#000000' : '#FFFFFF';
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setCount(count + 1)}>Switch</button>
        <Canvas draw={draw} />
      </header>
    </div>
  );
}

export default App;
