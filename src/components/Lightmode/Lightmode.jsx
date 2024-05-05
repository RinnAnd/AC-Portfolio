import "./Lightmode.css";
import { motion } from "framer-motion";

const Lightmode = () => {
  return (
    <motion.div
      className="light-modal"
      initial={{ opacity: 0, scale: 0.5, y: "50%", skewY: "60deg"}}
      animate={{ opacity: 1, scale: 1, y: "0", skewY: "0"}}
      exit={{ opacity: 0, scale: 0.5, y: "50%", skewY: "60deg"}}
      transition={{ duration: 0.2 }}
    >
      <div className="light-box">
        <h2>Light mode is bad for your eyes</h2>
        <p>Please refrain from doing that.</p>
      </div>
    </motion.div>
  );
};

export default Lightmode;
