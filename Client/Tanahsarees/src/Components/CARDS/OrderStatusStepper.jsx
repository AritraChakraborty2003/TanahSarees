/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const OrderStatusStepper = ({ status }) => {
  const steps =
    status === "cancelled" || status === "resolved"
      ? ["cancelled", "resolved"] // Removed "Cancelled" step
      : ["confirmed", "shipped", "packed", "delivered"];

  const getCurrentStep = () => steps.indexOf(status);

  return (
    <div className="font-Montserrat  text-[2.15vmin] lg:text-[1.75vmin] relative flex justify-center max-w-lg mx-auto">
      {steps.map((step, index) => (
        <div
          key={step}
          className="pl-2 pr-2 relative flex flex-col items-center"
        >
          {/* Connector Line */}
          {index >= 0 && (
            <>
              <div
                className={`absolute w-20 h-1 -z-10 bg-gray-300 -left-10 top-4 ${
                  index <= getCurrentStep()
                    ? status === "cancelled" || status === "resolved"
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-green-500 bg-green-500 text-white"
                    : "border-gray-300 bg-white text-gray-500"
                }`}
              />
              <div
                className={`absolute w-20 h-1 -z-10 bg-gray-300 left-10 top-4 ${
                  index <= getCurrentStep()
                    ? status === "cancelled" || status === "resolved"
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-green-500 bg-green-500 text-white"
                    : "border-gray-300 bg-white text-gray-500"
                }`}
              />
            </>
          )}

          {/* Step Circle */}
          <motion.div
            className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all ${
              index <= getCurrentStep()
                ? status === "cancelled" || status === "resolved"
                  ? "border-red-500 bg-red-500 text-white"
                  : "border-green-500 bg-green-500 text-white"
                : "border-gray-300 bg-white text-gray-500"
            }`}
          >
            {index + 1}
          </motion.div>

          {/* Step Label */}
          <span className="mt-2  text-[2.15vmin] lg:text-[1.35vmin] space-x-5">
            {step}
          </span>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusStepper;
