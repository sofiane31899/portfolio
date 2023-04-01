import { motion } from "framer-motion";
import frontend from "./assets/frontend.svg";

const variant = {
  hidden: {
    path: "#blob1",
  },
  show: {
    path: "#blob1",
    transition: { repeat: "yoyo", duration: 3 },
  },
};

function App() {
  return (
    <div className=" flex flex-col justify-center items-center min-h-[400px] p-[100px]">
      <motion.img
        animate={{ rotate: 360 }}
        transition={{ repeat: "mirror", repeatDelay: -0.3, duration: 3 }}
        src={frontend}
        className="w-72 h-72"
        alt="weli ghedwa"
      />
    </div>
  );
}

export default App;
