import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProfitChart = ({ transactionData, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!transactionData || transactionData.length === 0) {
    return <p>No data available</p>;
  }

  // Calculate total profit, loss, and current cash
  const totalProfit = transactionData.reduce(
    (sum, item) => sum + item.profit,
    0
  );
  const totalLoss = transactionData.reduce((sum, item) => sum + item.loss, 0);
  const totalCurrentCash = transactionData.reduce(
    (sum, item) => sum + item.current_cash,
    0
  );

  const labels = ["Total Profit", "Total Loss", "Total Current Cash"];
  const dataValues = [totalProfit, totalLoss, totalCurrentCash];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Financial Overview",
        data: dataValues,
        backgroundColor: [
          "rgb(75, 192, 192)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="w-80 shadow-2xl rounded-md border border-gray-600  ml-auto">
      <Pie data={data} />
    </div>
  );
};

export default ProfitChart;
