// components/ServiceHighlight.tsx
import { Player } from '@lottiefiles/react-lottie-player';
import serviceAnimation from '../public/animations/service-highlight.json';

const ServiceHighlight = () => {
  return (
    <Player
      autoplay
      loop
      src={serviceAnimation}
      style={{ height: '200px', width: '200px', margin: '0 auto' }}
    />
  );
};

export default ServiceHighlight;
