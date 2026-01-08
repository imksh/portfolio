import React, { useEffect } from "react";
import Lottie from "lottie-react";
import Err from "../assets/animations/error404.json";
import { useNavigate } from "react-router-dom";
import useUiStore from "../store/useUiStore";
import { motion } from "motion/react";
function Error404() {
  const navigate = useNavigate();
  const { setHide } = useUiStore();
  useEffect(() => {
    setHide(true);
    return () => setHide(false);
  }, []);

  return (
    <>
      <div
        className={`z-99 absolute top-0 left-0  w-full h-dvh flex justify-center items-center overflow-hidden bg-white `}
      >
        <Lottie animationData={Err} loop className="w-full" />
      </div>
      <motion.button
      whileHover={{scale:1.1}}
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 absolute z-100 bottom-[10%] left-[10%]"
      >
        Home
      </motion.button>
    </>
  );
}

export default Error404;
