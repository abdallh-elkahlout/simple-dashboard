<template>
  <v-row class="mt-6">
    <v-col cols="4">
      <v-card class="px-1" style="border-radius: 7px; overflow: visible">
        <v-card-text>
          <div
            class="chart"
            style="
              background-color: #e91e63;
              padding: 30px;
              border-radius: 4px;
              margin-top: -40px;
              box-shadow: 0 3px 7px #3c4855;
              position: relative;
              z-index: 2;
            "
          >
            <Bar :data="chartData" :options="chartOptions" />
          </div>
        </v-card-text>
        <v-card-title style="font-weight: 400; color: #3c4858; font-size: 20px">
          Website Views
        </v-card-title>
        <v-card-text style="font-weight: 300; color: #3c4858; font-size: 17px"
          >Last Campaign Performance</v-card-text
        >
        <v-divider
          class="mt-7"
          style="color: black; width: 90%; margin-left: 5%"
        ></v-divider>
        <v-card-text style="color: #919fb3">
          <v-icon>mdi-clock-outline</v-icon>
          updated 10 minutes ago
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="px-1" style="border-radius: 7px; overflow: visible">
        <v-card-text>
          <div
            class="chart"
            style="
              background-color: #4caf50;
              padding: 30px;
              border-radius: 4px;
              margin-top: -40px;
              box-shadow: 0 3px 7px #3c4855;
              position: relative;
              z-index: 2;
            "
          >
            <Line :data="lineChartData" :options="lineChartOptions" />
          </div>
        </v-card-text>
        <v-card-title style="font-weight: 400; color: #3c4858; font-size: 20px">
          Daily Sales
        </v-card-title>
        <v-card-text style="font-weight: 300; color: #3c4858; font-size: 17px"
          >Last Campaign Performance</v-card-text
        >
        <v-divider
          class="mt-7"
          style="color: black; width: 90%; margin-left: 5%"
        ></v-divider>
        <v-card-text style="color: #919fb3">
          <v-icon>mdi-clock-outline</v-icon>
          updated 10 minutes ago
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="4">
      <v-card class="px-1" style="border-radius: 7px; overflow: visible">
        <v-card-text>
          <div
            class="chart"
            style="
              background-color: #00cae3;
              padding: 30px;
              border-radius: 4px;
              margin-top: -40px;
              box-shadow: 0 3px 7px #3c4855;
              position: relative;
              z-index: 2;
            "
          >
            <Line
              :data="secondLineChartData"
              :options="secondLineChartOptions"
            />
          </div>
        </v-card-text>
        <v-card-title style="font-weight: 400; color: #3c4858; font-size: 20px">
          Completed Tasks
        </v-card-title>
        <v-card-text style="font-weight: 300; color: #3c4858; font-size: 17px"
          >Last Campaign Performance</v-card-text
        >
        <v-divider
          class="mt-7"
          style="color: black; width: 90%; margin-left: 5%"
        ></v-divider>
        <v-card-text style="color: #919fb3">
          <v-icon>mdi-clock-outline</v-icon>
          updated 10 minutes ago
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { Bar, Line } from "vue-chartjs";

import {
  Chart,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const chartData = {
  labels: [
    "Ja",
    "Fe",
    "Ma",
    "Ap",
    "Mai",
    "Ju",
    "Jul",
    "Au",
    "Se",
    "Oc",
    "No",
    "De",
  ],
  datasets: [
    {
      label: "Dataset",
      backgroundColor: "#fffc",
      data: [500, 300, 700, 600, 400, 300, 500, 600, 700, 800, 900, 850],
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { ticks: { color: "#fffc" } },
    y: {
      ticks: { color: "#fffc", stepSize: 200 }, // خطوة التدرج
      min: 0, // أقل قيمة على المحور
      max: 800, // أعلى قيمة على المحور
    },
  },
};

//line

const lineChartData = {
  labels: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      label: "Dataset",
      data: [10, 15, 8, 17, 20, 15, 35],
      borderColor: "#fff",
      backgroundColor: "rgba(255,255,255,0.2)",
      pointBackgroundColor: "#fff",
      pointBorderColor: "#fff",
      pointRadius: 5,
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    x: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.2)" } },
    y: {
      ticks: { color: "#fff", stepSize: 10 },
      grid: { color: "rgba(255,255,255,0.2)" },
      min: 0,
      max: 40,
    },
  },
};
const secondLineChartData = {
  labels: ["12am", "3am", "6am", "9am", "12pm", "3am", "6am", "9am"],
  datasets: [
    {
      label: "Dataset",
      data: [200, 700, 400, 300, 210, 205, 200, 195],
      borderColor: "#fff",
      backgroundColor: "rgba(255,255,255,0.2)",
      pointBackgroundColor: "#fff",
      pointBorderColor: "#fff",
      pointRadius: 5,
      tension: 0.4,
    },
  ],
};

const secondLineChartOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: {
    x: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.2)" } },
    y: {
      ticks: { color: "#fff", stepSize: 200 },
      grid: { color: "rgba(255,255,255,0.2)" },
      min: 0,
      max: 800,
    },
  },
};
</script>
