/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// import axios from "axios";

const NewOrdersChart = () => {
  const [data, setData] = useState([
    { date: "2025-02-15", order_count: 10 },
    { date: "2025-02-16", order_count: 15 },
    { date: "2025-02-17", order_count: 8 },
    { date: "2025-02-18", order_count: 20 },
    { date: "2025-02-19", order_count: 12 },
    { date: "2025-02-20", order_count: 18 },
    { date: "2025-02-21", order_count: 25 },
  ]);

  useEffect(() => {
    // Uncomment when API is ready
    // axios.get("http://your-backend-url/api/orders/daily")
    //   .then((res) => setData(res.data))
    //   .catch((err) => console.error("Error fetching order data:", err));
  }, []);

  return (
    <div className="bg-[#F7D9CB] shadow-md rounded-lg p-10 ">
      <h2 className="text-xl font-semibold mb-4">Daily Orders</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="order_count" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NewOrdersChart;
