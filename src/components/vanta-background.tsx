'use client';

import { useState, useEffect, useRef } from 'react';

// This is a workaround for the fact that Vanta.js is not a module
declare global {
    interface Window {
        VANTA: any;
    }
}

const VantaBackground = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.VANTA && window.VANTA.WAVES) {
      if (!vantaEffect) {
        setVantaEffect(
          window.VANTA.WAVES({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x1e3a8a,
            shininess: 30.00,
            waveHeight: 15.00,
            waveSpeed: 0.75,
            zoom: 0.75
          })
        );
      }
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default VantaBackground;
