/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TimerComp = (props) => {
  const targetTime = Date.now() + props.days * 24 * 60 * 60 * 1000; // 10 days from now

  const [timeLeft, setTimeLeft] = useState(targetTime - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetTime - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }); // Empty dependency array ensures it runs once

  const formatTime = (ms) => {
    if (ms <= 0) return "Sale ended"; // Stop countdown when time reaches zero
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    return `Sale ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="text-center text-sm  lg:text-lg font-Montserrat text-[#FF0000]">
      {formatTime(timeLeft)}
    </div>
  );
};

export default TimerComp;
