import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let ctx: any = document.getElementById('projectChart');
    ctx.height = 232;
    let projectChart = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Tổng quan dự án',
            data: [300, 50, 100],
            backgroundColor: ['#2DB290', '#F04D64', '#FFC800'],
          },
        ],
      },
      options: {
        cutout: '75%',
      },
    });
  }
}
