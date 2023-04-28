import { React, useState } from "react";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import zoomPlugin from "chartjs-plugin-zoom";
import { zoomOptions } from "../defaultChartOptions";

export default function VwcChart({ data }) {
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        position: "bottom",
        title: {
          display: true,
          text: "Time",
        },
        type: "time",
        ticks: {
          autoSkip: false,
          autoSkipPadding: 50,
          maxRotation: 0,
          major: {
            enabled: true,
          },
        },
        time: {
          displayFormats: {
            hour: "hh:mm a",
            day: "D",
          },
        },
      },
      ecAxis: {
        position: "right",
        beginAtZero: true,
        title: {
          display: true,
          text: "EC (µS/cm)",
        },
      },
      vwcAxis: {
        position: "left",
        beginAtZero: true,
        suggestedMax: 0.9,
        title: {
          display: true,
          text: "VWC (%)",
        },
        min: 0,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      zoom: zoomOptions,
    },
  };

  return (
    <div className="vwc-chart">
      <Line data={data} options={chartOptions} />
    </div>
  );
}
