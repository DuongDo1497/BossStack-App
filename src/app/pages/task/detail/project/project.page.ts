import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let ctx: any = document.getElementById('jobChart');
    ctx.height = 232;
    let jobChart = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Chi tiết dự án',
            data: [100, 50, 100, 75, 25],
            backgroundColor: [
              '#FFC800',
              '#2E5EA9',
              '#D9E8FF',
              '#00A5F3',
              '#96DCFB',
            ],
          },
        ],
      },
      options: {
        cutout: '75%',
      },
    });
  }
}
