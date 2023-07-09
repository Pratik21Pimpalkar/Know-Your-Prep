import React from "react";
import Chart from "react-apexcharts";

const StackbarGraph = (props) => {
  const labels = props.StackBarLabel;
  const series = props.StackBarSeries;

  let correctSeries = [];
  let incorrectSeries = [];

  // console.log("StackbarGraph labels: ", labels);
  // console.log("StackbarGraph series: ", series);

  try {
    for (let i = 0; i < series.length; i++) {
      correctSeries.push(series[i][0]);
      incorrectSeries.push(series[i][1]);
    }
  } catch (error) {}

  const temp = {
    series: [
      {
        name: "Correct",
        data: correctSeries,
      },
      {
        name: "Incorrect",
        data: incorrectSeries,
      },
    ],
    options: {
      title: {
        text: "Number of correct and incorrect answers",
        align: "Center",
        style: {
          color: "#fff",
        },
      },
      chart: {
        toolbar: { show: false },
        type: "bar",
        stacked: "true",
        height: 450,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top",
          },
          columnWidth: "80%",
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: 0,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#EB5797", "#EF7DBA", "#C05FE3"],
      },
      colors: ["#6806C7", "#8D139F"],
      tooltip: {
        shared: true,
        intersect: false,
        followCursor: true,
        theme: "dark",
        style: {
          fontSize: "10px",
          fontFamily: undefined,
        },
      },
      grid: {
        show: false,
      },
      legend: {
        labels: {
          colors: "#fff",
        },
      },
      xaxis: {
        categories: labels,
        labels: {
          rotate: 0,
          style: {
            colors: "#fff",
            fontSize: "12px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
          },
        },
      },
      responsive: [
        {
          breakpoint: 1000,
          options: {
            chart: {
              height: "200%",
            },
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: "bottom",
            },
          },
        },
        {
          breakpoint: 600,
          options: {
            chart: {
              height: "200%",
            },
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return <Chart type="bar" options={temp.options} series={temp.series} />;
};

export default StackbarGraph;
