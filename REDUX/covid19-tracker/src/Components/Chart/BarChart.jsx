import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Current State in Turkey",
    },
  },
};

function BarChart() {
  return (
    <>
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths", "Active"],
          datasets: [
            {
              label: "User Gained",
              data: [124, 546, 234, 567],
              backgroundColor: ["#B0D7FD", "#DDF6E2", "#F4D6D6", "#F4E1C9"],
              borderColor: ["#576BFE", "#6EFA70", "#F96A6A", "#F2E564"],
              borderWidth: 2,
            },
          ],
        }}
        width={"200px"}
        height={"100px"}
        options={options}
      />
    </>
  );
}

export default BarChart;
