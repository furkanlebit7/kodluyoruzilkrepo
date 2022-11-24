import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const UserData = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345,
  },
  {
    id: 3,
    year: 2018,
    userGain: 12162,
    userLost: 555,
  },
  {
    id: 3,
    year: 2018,
    userGain: 63588,
    userLost: 234,
  },
];

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

const data = {
  labels: ["Infected", "Recovered", "Deaths", "Active"],
  datasets: [
    {
      label: "User Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: ["#B0D7FD", "#DDF6E2", "#F4D6D6", "#F4E1C9"],
      borderColor: ["#576BFE", "#6EFA70", "#F96A6A", "#F2E564"],
      borderWidth: 2,
    },
  ],
};

function BarChart() {
  return <Bar data={data} width={"200px"} height={"100px"} options={options} />;
}

export default BarChart;
