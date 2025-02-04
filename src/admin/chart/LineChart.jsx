import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

const LineChart = ({ transactionData }) => {
  // Assuming transactionData is an array of objects with date, profit, loss, and current_cash properties
  const labels = transactionData.map((item) => item.date);

  // Data for the chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Profit",
        data: transactionData.map((item) => item.profit),
        fill: false,
        borderColor: "rgb(75, 192, 192)", // Line color for Profit
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointBackgroundColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Loss",
        data: transactionData.map((item) => item.loss),
        fill: false,
        borderColor: "rgb(255, 99, 132)", // Line color for Loss
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
      {
        label: "Current Cash",
        data: transactionData.map((item) => item.current_cash),
        fill: false,
        borderColor: "rgb(54, 162, 235)", // Line color for Current Cash
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBackgroundColor: "rgb(54, 162, 235)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Profit, Loss, and Current Cash Over Time",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Amount",
        },
      },
    },
  };

  return (
    <div className="w-auto mx-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
