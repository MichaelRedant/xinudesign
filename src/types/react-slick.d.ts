// src/types/react-slick.d.ts
declare module 'react-slick' {
    import * as React from 'react';
  
    interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      arrows?: boolean;
      adaptiveHeight?: boolean;
      variableWidth?: boolean;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<Settings>;
      }>;
    }
  
    class Slider extends React.Component<Settings> {}
  
    export default Slider;
  }
  