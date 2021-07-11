import logo from './logo.svg';
import Canvas from './canvas/Canvas';
import './App.css';
import { useState } from 'react';

const createImage = (src) => {
  const img = new Image();
  img.src = src;

  return img;
};

// we should probably import images directly here via React so we'll get
// data-uri conversion oout of the box, still we might need to change
// IMAGE_INLINE_SIZE_LIMIT, see https://create-react-app.dev/docs/adding-images-fonts-and-files/
const images = {
  body: {
    dark: createImage('Universal-LPC-spritesheet/body/male/dark.png'),
    light: createImage('Universal-LPC-spritesheet/body/male/light.png'),
  },
  pants: {
    red: createImage(
      'Universal-LPC-spritesheet/legs/pants/male/red_pants_male.png'
    ),
    teal: createImage(
      'Universal-LPC-spritesheet/legs/pants/male/teal_pants_male.png'
    ),
  },
  shirt: {
    brown: createImage(
      'Universal-LPC-spritesheet/torso/shirts/longsleeve/male/brown_longsleeve.png'
    ),
    teal: createImage(
      'Universal-LPC-spritesheet/torso/shirts/longsleeve/male/teal_longsleeve.png'
    ),
  },
};

function App() {
  const [body, setBody] = useState('light');
  const [pants, setPants] = useState('red');
  const [shirt, setShirt] = useState('brown');

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(95, 90, 70 * Math.sin(frameCount * 0.03) ** 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.drawImage(images['body'][body], 0, 0);
    ctx.drawImage(images['pants'][pants], 0, 0);
    ctx.drawImage(images['shirt'][shirt], 0, 0);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Canvas draw={draw} options={{ width: 189, height: 195 }} />

        <button onClick={() => setBody('light')}>Light Body</button>
        <button onClick={() => setBody('dark')}>Dark Body</button>

        <button onClick={() => setPants('red')}>Red Pants</button>
        <button onClick={() => setPants('teal')}>Teal Pants</button>

        <button onClick={() => setShirt('brown')}>Brown Shirt</button>
        <button onClick={() => setShirt('teal')}>Teal Shirt</button>

        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
