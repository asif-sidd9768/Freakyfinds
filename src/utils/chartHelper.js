
export const getBarChartData = (categoryValues, timesOpenedValues) => ({
  labels:categoryValues,
  datasets: [
    {
      label: "Browsed Items",
      data: timesOpenedValues,
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 206, 86, 0.7)",
        "rgba(75, 192, 192, 0.7)"
      ]
    }
  ]
});

export const getPieChartData = (categoryValues, timesOpenedValues) => ({
  labels: categoryValues,
  datasets: [
    {
      label: 'Items browsed',
      data: timesOpenedValues,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      },
    ],
  })

export const chartOptions = {
  responsive: true, 
  maintainAspectRatio: false,	// Don't maintain w/h ratio
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      position: "bottom",
      text: 'Analysis of browsed products',
    },
  },
}