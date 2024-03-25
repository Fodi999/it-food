<template>
    <div>
      <canvas id="myChart"></canvas>
      <table>
        <thead>
          <tr>
            <th>Заголовок 1</th>
            <th>Заголовок 2</th>
            <th>Заголовок 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Данные 1</td>
            <td>Данные 2</td>
            <td>Данные 3</td>
          </tr>
          <!-- Добавьте больше строк здесь, если нужно -->
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js';
  
  const config = {
    type: 'line',
    data: {
      labels: ['A', 'B', 'C'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Stacked Line/Bar Chart'
        }
      },
      scales: {
        y: {
          stacked: true
        }
      }
    },
  };
  
  export default {
    mounted() {
      const ctx = document.getElementById('myChart').getContext('2d');
      new Chart(ctx, config);
    }
  }
  </script> 