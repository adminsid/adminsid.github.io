const years = Object.keys(sampleData); 

const data = Object.values(sampleData); 

const horozontalChartDetails = {

    type: 'horizontalBar', 

    data: {

      labels: years,

      datasets: [

          {

            label: "Students Percentage",

            data: data,

            backgroundColor: ["#FF0000", "#8e5ea2","#3cba9f", "#8e5ea2","#FF0000", "#3e95cd", "#8e5ea2","#3cba9f","#8e5ea2","#c45850","#FF0000", "#8e5ea2","#3cba9f"], 

            borderWidth: 2

          },    

        ]

    },

    options: {

        title: {

            display: true,

            text: 'Horizontal Bar'

        },

        legend: { 
            display: false

        },

        tooltips: { 

            enabled: false

        },

        scales: {

            yAxes: [{

            ticks: {

                reverse: false 

            }

            }],

        }

    }

  }

  const doughnutChartDetails = {

    type: 'doughnut',

    data: {

      labels: years,

      datasets: [

          {

            label: "Students Percentage",

            data: data,

            backgroundColor: ["#FF0000", "#8e5ea2","#3cba9f", "#8e5ea2","#FF0000", "#3e95cd", "#8e5ea2","#3cba9f","#8e5ea2","#c45850", "#FF0001", "#8e5ea2","#3cba9f"], 

            borderWidth: 2

          },    

          

          ]

    },

    options: {

        title: {

            display: true,

            text: 'Doughnut Chart'

        },

        legend: { 

            display: false

        },

        tooltips: { 

            enabled: true

        },

    }

  }

 

  const barChart = document.getElementById('chartJSContainer').getContext('2d');

  const doughnut = document.getElementById('doughnutChartContainer').getContext('2d');

  const myHorizontalChart = new Chart(barChart, horozontalChartDetails);

  const myDoughnutChart = new Chart(doughnut, doughnutChartDetails);