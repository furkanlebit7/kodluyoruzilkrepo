import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchDaily } from "../../Redux/Services/CovidService";

function LineChart() {
  const dispatch = useDispatch();

  const daily = useSelector((state) => state.covid.daily.daily);
  const countriesStatus = useSelector((state) => state.covid.daily.status);

  useEffect(() => {
    dispatch(fetchDaily());
  }, []);

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
    labels: daily.map((day) => day.date),
    datasets: [
      {
        label: "Deaths",
        data: daily.map((day) => day.deaths),
        backgroundColor: "rgba(255,0,0,0.5)",
        fill: true,
      },
      {
        label: "Infected",
        data: daily.map((day) => day.confirmed),

        backgroundColor: "rgba(0,0,255,0.1)",
        fill: true,
      },
    ],
  };

  return (
    <div>
      {countriesStatus && (
        <Line data={data} width={"200px"} height={"100px"} options={options} />
      )}
    </div>
  );
}

export default LineChart;
