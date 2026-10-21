import { Line } from "react-chartjs-2"
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
 } from "chart.js"
import {LineChartData} from "../data/chartsData"

 ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
 )
const LineGraph = () => {

   const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      ticks: {
        color: "white",
      autoSkip: true,     
      maxTicksLimit: 5,
        callback: function(value, index) {
        return index % 2 === 0 ? this.getLabelForValue(value) : '';
      },
      
      },
      grid: {
        display: false
      }
    },
    y: {
      min: 0,
      max: 600,
      ticks: {
        stepSize: 400,
        color: "white",
        callback: function(value){
        return value === 600 ? "": value
      }
      },
      grid: {
       color: function(ctx) {
        if (ctx.tick.value === 0 || ctx.tick.value === 400) {
          return "rgba(255,255,255,0.3)"; 
        }
        return "transparent"; 
      }
     },

    }
  }
};
  return (
    <div>
      <Line options={options} data={LineChartData} />
    </div>
  )
}

export default LineGraph
