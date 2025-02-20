/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const TimerComp = ({ days }) => {
  const [timeLeft, setTimeLeft] = useState(days * 24 * 60 * 60 * 1000);

  useEffect(() => {
    const targetTime = Date.now() + days * 24 * 60 * 60 * 1000;

    const updateTimer = () => {
      const remaining = targetTime - Date.now();
      setTimeLeft(remaining > 0 ? remaining : 0);
    };

    updateTimer(); // Ensure immediate update
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [days]); // Dependency added to re-calculate on prop change

  const formatTime = (ms) => {
    if (ms <= 0) return "Sale ended"; // Stop countdown when time reaches zero
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    return `Sale ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="text-center text-sm lg:text-lg font-Montserrat text-[#FF0000]">
      {formatTime(timeLeft)}
    </div>
  );
};

export default TimerComp;
