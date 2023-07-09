import React from "react";
import Chart from "react-apexcharts";

const ComparisonChart = (props) => {
  const labels = props.ComparisonChartLabel;
  const series = props.ComparisonChartSeries;

  // console.log("ComparisonChart labels: ", labels);
  // console.log("ComparisonChart series: ", series);

  let easy = [];
  let medium = [];
  let hard = [];

  try {
    for (let i = 0; i < series.length; i++) {
      easy.push(series[i][0]);
      medium.push(series[i][1]);
      hard.push(series[i][2]);
    }
  } catch (error) {}

  const bar = {
    series: [
      {
        name: "EASY",
        data: easy,
      },
      {
        name: "MEDIUM",
        data: medium,
      },
      {
        name: "HARD",
        data: hard,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: true,
      },
      grid: {
        show: false,
        borderColor: "#e7e7e7",
      },
      title: {
        text: "Level-Wise Performance",
        align: "Center",
        style: {
          color: "#fff",
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        labels: {
          style: {
            colors: "#fff",
          },
        },
        categories: labels,
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
          },
        },
        title: {
          text: " questions",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " questions";
          },
        },
        theme: "dark",
      },
      legend: {
        labels: {
          colors: "#fff",
        },
      },
    },
  };

  return (
    <Chart type="bar" options={bar.options} series={bar.series} height={500} />
  );
};

export default ComparisonChart;
