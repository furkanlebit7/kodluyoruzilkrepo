import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { fetchDaily } from "../../Redux/Services/CovidService";
import { getDaily } from "../../Redux/Slice/CovidSlice";

function LineChart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDaily());
  }, []);

  const daily = useSelector(getDaily);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
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
      <Line
        data={data}
        width={"200px"}
        height={"100px"}
        options={options}
        style={{ minHeight: "300px", minWidth: "100%" }}
      />
    </div>
  );
}

export default LineChart;
