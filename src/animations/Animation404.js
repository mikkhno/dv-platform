import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import AnimationJson404 from './json/404/anim404.json';

const Animation404 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: containerRef.current, // The ref to render the animation
      renderer: 'svg', // Render as SVG
      loop: true, // Enable looping
      autoplay: true, // Autoplay the animation
      animationData: AnimationJson404, // The Bodymovin JSON data
      // path: "/animations/json/404/animation_404.json",
    });

    return () => {
      lottie.destroy(); // Cleanup on unmount
    };
  }, []);

  return <div ref={containerRef} style={{ width: 563, height: 410 }} />;
};

export default Animation404;

