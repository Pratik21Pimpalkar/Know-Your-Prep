import React from "react";
import Chart from "react-apexcharts";

const PieChart = (props) => {
  const labels = props.PieChartLabel;
  const series = props.PieChartSeries;

  // console.log("PieChart labels: ", labels);
  // console.log("PieChart series: ", series);

  const line = {
    series: series,
    options: {
      chart: {
        type: "pie",
      },
      colors: [
        "#008FFB",
        "#775DD0",
        "#FEB019",
        "#205afe",
        "#00E396",
        "#284D36",
        "#eedc09",
        "#EE1709",
        "#834b01",
        "#EBEB89",
        "#F61148",
      ],
      title: {
        text: "Overall Analysis ",
        align: "centre",
        margin: 10,
        padding: 0,
        offsetX: 0,
        offsetY: 0,
        padding: "20px",
        floating: false,
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#fff",
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%";
          },
        },
      },
      legend: {
        position: "bottom",
        labels: {
          colors: "white",
        },
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 1400,
          options: {
            chart: {
              height: "325rem",
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return <Chart type="pie" options={line.options} series={line.series} />;
};

export default PieChart;
