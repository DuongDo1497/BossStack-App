import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  segment = 'chart';
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let ctx: any = document.getElementById('myChart');
    ctx.height = 300;
    let cashPlan = new Chart(ctx.getContext('2d'), {
      data: {
        labels: [1, 2, 3, 4],
        datasets: [
          {
            type: 'bar',
            label: '',
            data: [10, 20, 30, 40],
            backgroundColor: ['#1BCD91'],
          },
          {
            type: 'bar',
            label: '',
            data: [10, 20, 30, 40],
            backgroundColor: ['#F04D64'],
          },
          {
            type: 'line',
            label: '',
            data: [5, 25, 35, 45],
            borderColor: ['#FD9F13'],
          },
        ],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Tuổi (năm)',
              align: 'end',
              font: {
                size: 10,
                weight: '500',
              },
            },
          },
          y: {
            title: {
              display: true,
              text: 'Triệu đồng',
              align: 'end',
              font: {
                size: 10,
                weight: '500',
              },
            },
            ticks: {
              stepSize: 5,
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
