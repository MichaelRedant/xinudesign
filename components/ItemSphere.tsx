// components/ItemSphere.tsx
import { Player } from '@lottiefiles/react-lottie-player';
import itemSphereAnimation from '../public/animations/item-sphere.json';

const ItemSphere = () => {
  return (
    <Player
      autoplay
      loop
      src={itemSphereAnimation}
      style={{ height: '40px', width: '40px' }}
    />
  );
};

export default ItemSphere;
