import { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = () => {
  const player = useRef<Player>(null);
  return (
    <Player
      ref={player}
      src="https://assets4.lottiefiles.com/temp/lf20_dzWAyu.json"
      autoplay={true}
      loop={false}
      speed={0.5}
      style={{ width: "100%", height: "300px" }}
    ></Player>
  );
};

export default NotFound;
