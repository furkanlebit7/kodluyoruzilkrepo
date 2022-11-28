import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: "Current State in Turkey",
      },
    },
  };

  const data = {
    // labels: daily.map((day) => day.date),
    labels: ["pzt", "sal", "çrş", "prş"],
    datasets: [
      {
        label: "Deaths",
        // data: daily.map((day) => day.deaths),
        data: [1, 2, 3, 4],
        backgroundColor: "rgba(255,0,0,0.5)",
        fill: true,
      },
      {
        label: "Infected",
        // data: daily.map((day) => day.confirmed),
        data: [2, 3, 4, 5],

        backgroundColor: "rgba(0,0,255,0.1)",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <Line data={data} width={"200px"} height={"100px"} options={options} />
    </div>
  );
}

export default LineChart;
