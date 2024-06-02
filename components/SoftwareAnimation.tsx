// components/SoftwareAnimation.tsx
import { Player } from '@lottiefiles/react-lottie-player';
import SoftwareAnimationData from '../public/animations/software.json';

const SoftwareAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src={SoftwareAnimationData}
      style={{ height: '200px', width: '200px', margin: 'auto' }}
    />
  );
};

export default SoftwareAnimation;
