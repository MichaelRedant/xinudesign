// global.d.ts
declare module '@lottiefiles/react-lottie-player' {
    import { ComponentType } from 'react';
  
    interface LottieProps {
      autoplay?: boolean;
      loop?: boolean;
      src: string | object;
      style?: React.CSSProperties;
      [key: string]: any;
    }
  
    export const Player: ComponentType<LottieProps>;
  }
  