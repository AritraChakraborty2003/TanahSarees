import { useState } from "react";
import { motion } from "framer-motion";

const ScrollComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">Brand</h1>
        <ul className="flex gap-6">
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span className="hover:underline">Shop</span>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="fixed left-0 top-[60px] w-screen bg-white shadow-lg border border-gray-200"
              >
                <ul className="p-4">
                  <li className="p-2 hover:underline">Category 1</li>
                  <li className="p-2 hover:underline">Category 2</li>
                  <li className="p-2 hover:underline">Category 3</li>
                </ul>
              </motion.div>
            )}
          </li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default ScrollComp;
