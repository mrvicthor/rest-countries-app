import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Loader = () => {
  const player = useRef<Player>(null);
  return (
    <Player
      ref={player}
      src="https://assets8.lottiefiles.com/datafiles/bEYvzB8QfV3EM9a/data.json"
      autoplay={true}
      loop={false}
      speed={0.5}
      style={{ width: "100%", height: "500px" }}
    ></Player>
  );
};

export default Loader;
