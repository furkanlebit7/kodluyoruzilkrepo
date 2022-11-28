import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { useSelector } from "react-redux";
import { getData } from "../../Redux/Slice/CovidSlice";

function BarChart() {
  const data = useSelector(getData);

  return (
    <>
      {data && (
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths", "Active"],
            datasets: [
              {
                label: "User Gained",
                data: data.confirmed
                  ? [
                      data.confirmed.value,
                      data.recovered.value,
                      data.deaths.value,
                      data.confirmed.value -
                        data.recovered.value -
                        data.deaths.value,
                    ]
                  : [0, 0, 0, 0],
                backgroundColor: ["#B0D7FD", "#DDF6E2", "#F4D6D6", "#F4E1C9"],
                borderColor: ["#576BFE", "#6EFA70", "#F96A6A", "#F2E564"],
                borderWidth: 2,
              },
            ],
          }}
          width={"200px"}
          height={"100px"}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              title: {
                display: true,
                text: `Current State in ${data.country}`,
              },
            },
          }}
        />
      )}
    </>
  );
}

export default BarChart;
