"use client";

import Lottie from "lottie-react";
import { FC, useEffect, useState } from "react";

interface AnimationLottieProps {
  animationPath: any; // Specify the type based on your animation data
  width?: string;
}

const AnimationLottie: FC<AnimationLottieProps> = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server side
  }

  return (
    <div style={{ width: width || '55%' }}>
      <Lottie
        loop
        autoplay
        animationData={animationPath}
      />
    </div>
  );
};

export default AnimationLottie;
