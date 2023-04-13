import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-manage-cash',
  templateUrl: './manage-cash.page.html',
  styleUrls: ['./manage-cash.page.scss'],
})
export class ManageCashPage implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let ctx: any = document.getElementById('statistical');
    ctx.height = 300;
    let statistical = new Chart(ctx.getContext('2d'), {
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
          {
            type: 'bar',
            label: '',
            data: [10, 20, 30, 40, 10, 20, 30, 40, 10, 20, 30, 40],
            backgroundColor: ['#1BCD91'],
          },
          {
            type: 'bar',
            label: '',
            data: [-10, -20, -30, -40, -10, -20, -30, -40, -10, -20, -30, -40],
            backgroundColor: ['#F04D64'],
          },
        ],
      },
      options: {
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
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
