import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Box } from '@mui/material';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// function LineChart() {
//     const data = {
//         labels: [
//             'January',
//             'February',
//             'March',
//             'April',
//             'May',
//             'June',
//             'July',
//             'August',
//             'September',
//             'October',
//             'November',
//             'December',
//         ],
//         datasets: [
//             {
//                 label: '2021',
//                 data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13],
//                 backgroundColor: '#0061ff',
//                 borderColor: '#0061ff',
//                 tension: 0.1,
//             },
//         ],
//     };

//     const options = {
//         plugins: {
//             legend: true,
//         },
//     };
//     return (
//         <div>
//             <Box display="flex" justifyContent="center">
//                 Courses Revenue
//             </Box>
//             <Line options={options} data={data}></Line>
//         </div>
//     );
// }

// function LineChart(
// month1
// ) {
//   const data = {
//     labels: [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ],
//     datasets: [
//       {
//         label: "2021",
//         data: [{month1}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13],
//         backgroundColor: "#0061ff",
//         borderColor:'#0061ff',
//         tension: 0.1,
//       },
//     ],
//   }

//   const options = {
//     plugins: {
//       legend: true,
//     },
//   }
//   return (
//     <div>
//       <Box display='flex' justifyContent='center'>Courses Revenue</Box>
//       <Line
//         options={options}
//         data={data}
//       ></Line>
//     </div>
//   )
// }

function LineChart(
{month1 = []}
) {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "2021",
        data: month1,
        backgroundColor: "#0061ff",
        borderColor:'#0061ff',
        tension: 0.1,
      },
    ],
  }

  const options = {
    plugins: {
      legend: true,
    },
  }
  return (
    <div>
      <Box display='flex' justifyContent='center'>Courses Revenue</Box>
      <Line
        options={options}
        data={data}
      ></Line>
    </div>
  )
}
export default LineChart
