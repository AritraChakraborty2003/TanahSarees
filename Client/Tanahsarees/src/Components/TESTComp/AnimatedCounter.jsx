import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center mt-50 space-y-4">
      <motion.h1
        key={count}
        initial={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="text-3xl font-bold"
      >
        {count}
      </motion.h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
