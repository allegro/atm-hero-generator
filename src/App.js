import logo from './logo.svg';
import Canvas from './canvas/Canvas';
import './App.css';
import { useState } from 'react';

import skeletonBody from './characters/01 body/1 Skeleton Body.png';
import humanBody from './characters/01 body/2 Human M Body.png';
import alienBody from './characters/01 body/3 Alien Body.png';
import orcBody from './characters/01 body/4 Orc Body.png';

import skeletonHead from './characters/02 head/1 Skull eyeless.png';
import humanHead from './characters/02 head/2 Human Head Eyeless.png';
import alienHead from './characters/02 head/3 Alien Head Eyeless.png';
import orcHead from './characters/02 head/4 Orc Head Eyeless.png';

import skeletonShirt from './characters/03 shirt/1 Red vest.png';
import humanShirt from './characters/03 shirt/2 „Geralt” Chestplate.png';
import alienShirt from './characters/03 shirt/3 Alien Top.png';
import orcShirt from './characters/03 shirt/4 Orc Pauldrons.png';

import humanPants from './characters/04 pants/2 „Geralt” Pants.png';
import alienPants from './characters/04 pants/3 Alien Pants.png';
import orcPants from './characters/04 pants/4 Orc Loincloth.png';

import skeletonEyes from './characters/05 eyes/1 skeleton eyes.png';
import humanEyes from './characters/05 eyes/2 „Geralt” Eyes.png';
import alienEyes from './characters/05 eyes/3 Alien Eyes.png';
import orcEyes from './characters/05 eyes/4 Orc Eyes.png';

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
    skeleton: createImage(skeletonBody),
    human: createImage(humanBody),
    alien: createImage(alienBody),
    orc: createImage(orcBody),
  },
  head: {
    skeleton: createImage(skeletonHead),
    human: createImage(humanHead),
    alien: createImage(alienHead),
    orc: createImage(orcHead),
  },
  shirt: {
    skeleton: createImage(skeletonShirt),
    human: createImage(humanShirt),
    alien: createImage(alienShirt),
    orc: createImage(orcShirt),
  },
  pants: {
    human: createImage(humanPants),
    alien: createImage(alienPants),
    orc: createImage(orcPants),
  },
  eyes: {
    skeleton: createImage(skeletonEyes),
    human: createImage(humanEyes),
    alien: createImage(alienEyes),
    orc: createImage(orcEyes),
  },
};

function App() {
  const [body, setBody] = useState('skeleton');
  const [head, setHead] = useState('skeleton');
  const [shirt, setShirt] = useState('skeleton');
  const [pants, setPants] = useState('human');
  const [eyes, setEyes] = useState('human');

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(95, 90, 70 * Math.sin(frameCount * 0.03) ** 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.drawImage(images['body'][body], 0, 0, 512, 512);
    ctx.drawImage(images['head'][head], 0, 0, 512, 512);
    ctx.drawImage(images['shirt'][shirt], 0, 0, 512, 512);
    ctx.drawImage(images['pants'][pants], 0, 0, 512, 512);
    ctx.drawImage(images['eyes'][eyes], 0, 0, 512, 512);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Canvas draw={draw} options={{ width: 512, height: 512 }} />

        <button onClick={() => setBody('skeleton')}>Skeleton Body</button>
        <button onClick={() => setBody('human')}>Human Body</button>
        <button onClick={() => setBody('alien')}>Alien Body</button>
        <button onClick={() => setBody('orc')}>Orc Body</button>
        <br />
        <button onClick={() => setHead('skeleton')}>Skeleton Head</button>
        <button onClick={() => setHead('human')}>Human Head</button>
        <button onClick={() => setHead('alien')}>Alien Head</button>
        <button onClick={() => setHead('orc')}>Orc Head</button>
        <br />
        <button onClick={() => setEyes('skeleton')}>Skeleton Eyes</button>
        <button onClick={() => setEyes('human')}>Human Eyes</button>
        <button onClick={() => setEyes('alien')}>Alien Eyes</button>
        <button onClick={() => setEyes('orc')}>Orc Eyes</button>
        <br />
        <button onClick={() => setShirt('skeleton')}>Red Vest Shirt</button>
        <button onClick={() => setShirt('human')}>Chestplate Shirt</button>
        <button onClick={() => setShirt('alien')}>Alien Top Shirt</button>
        <button onClick={() => setShirt('orc')}>Pauldrons Shirt</button>
        <br />
        <button onClick={() => setPants('human')}>Human Pants</button>
        <button onClick={() => setPants('alien')}>Alien Pants</button>
        <button onClick={() => setPants('orc')}>Orc Pants</button>

        <img src={logo} className='App-logo' alt='logo' />
      </header>
    </div>
  );
}

export default App;
