// components/ScrollDown.tsx
import { Player } from '@lottiefiles/react-lottie-player';
import scrollDownAnimation from '../public/animations/scroll-down.json';

const ScrollDown = () => {
  return (
    <Player
      autoplay
      loop
      src={scrollDownAnimation}
      style={{ height: '200px', width: '100px', margin: 'auto' }}
    />
  );
};

export default ScrollDown;
