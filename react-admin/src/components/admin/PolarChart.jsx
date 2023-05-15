
import { PolarArea } from "react-chartjs-2"
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

const data = {
  labels: ["Business", "IT & Software", "Design", "Marketing"],
  datasets: [
    {
      label: "Courses by category",
      data: [1, 4, 3, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",

        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
      borderColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",

        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
}

function PolarChart() {
  return (
    <div
      style={{
        marginTop: "28px",
      }}
    >
      <PolarArea
        data={data}
        options={options}
        style={{
          canvas: { display:'block',width: "100%", height: "100%" },
        }}
      />
    </div>
  )
}

export default PolarChart
