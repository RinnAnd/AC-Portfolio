import { useEffect, useState } from "react";
import "./lumin.css";

const Lumin = () => {
  const [lumin, setLumin] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 4);
    const luminClasses = ["top-left", "top-right", "bottom-left", "bottom-right"];
    setLumin(luminClasses[random]);
  }, []);

  return <div className={`lumin ${lumin}`}></div>;
};

export default Lumin;
