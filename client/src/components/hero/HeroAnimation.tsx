import Lottie from "lottie-react";
import heroAnimation from "../../assets/animations/hero-animation.json";

const HeroAnimation = () => {
  return (
    <div className="w-full">
      <Lottie
        animationData={heroAnimation}
        loop={true}
      />
    </div>
  );
};

export default HeroAnimation;