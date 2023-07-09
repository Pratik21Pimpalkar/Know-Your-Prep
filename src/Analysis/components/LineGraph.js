import React from "react";
import Chart from "react-apexcharts";

const LineGraph = (props) => {
  const labels = props.LineGraphLabel;
  const series = props.LineGraphSeries;

  // console.log("LineGraph labels: ", labels);
  // console.log("LineGraph series: ", series);

  const temp = {
    series: [
      {
        name: "Subjects",
        data: series,
      },
    ],
    options: {
      chart: {
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
        labels: {
          style: {
            color: "#fff",
          },
        },
      },
      title: {
        text: "Subject-Wise Performance",
        align: "center",
        style: {
          color: "#fff",
        },
      },
      xaxis: {
        categories: labels,
        labels: {
          formatter: function (value, timestamp, opts) {
            if (typeof value == "string") {
              return value.split(" ");
            }
          },
          style: {
            colors: "#fff",
          },
        },
        title: {
          style: {
            color: "#fff",
          },
          text: "Subjects",
          offsetY: 90,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
          },
        },
        title: {
          style: {
            color: "#fff",
          },
          text: "Performance",
        },
      },
      grid: {
        show: false,
        borderColor: "#e7e7e7",
      },
      markers: {
        size: 3,
      },
      tooltip: {
        shared: true,
        intersect: false,
        followCursor: true,
        theme: "dark",
        y: {
          title: {
            formatter: function (val) {
              return val.length >= 0 ? "Total Marks -" : val;
            },
          },
        },
        style: {
          fontSize: "10px",
          fontFamily: undefined,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          colorStops: [
            {
              offset: 0,
              color: "#EB656F",
              opacity: 1,
            },
            {
              offset: 20,
              color: "#FAD375",
              opacity: 1,
            },
            {
              offset: 60,
              color: "#61DBC3",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#95DA74",
              opacity: 1,
            },
          ],
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
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
  return <Chart type="line" options={temp.options} series={temp.series} />;
};

export default LineGraph;
