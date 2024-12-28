import Lottie, { Options } from  "react-lottie"

const lottieOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: require("../../public/background.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const backgroundLottie: React.FC = () => <Lottie options={lottieOptions} />;

export default backgroundLottie;