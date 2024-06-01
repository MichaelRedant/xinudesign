// components/Loader.tsx
import { Player } from '@lottiefiles/react-lottie-player';
import loaderAnimation from '../public/animations/loader.json';

const Loader = () => {
  return (
    <Player
      autoplay
      loop
      src={loaderAnimation}
      style={{ height: '150px', width: '150px' }}
    />
  );
};

export default Loader;
