// components/ScrollDown.tsx
import { Player } from '@lottiefiles/react-lottie-player';
import SignatureAnimation from '../public/animations/signature.json';

const Signature = () => {
  return (
    <Player
      autoplay
      loop
      src={SignatureAnimation}
      style={{ height: '200px', width: '300px', margin: 'auto' }}
    />
  );
};

export default Signature;
