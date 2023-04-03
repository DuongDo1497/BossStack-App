import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-flow-work',
  templateUrl: './flow-work.page.html',
  styleUrls: ['./flow-work.page.scss'],
})
export class FlowWorkPage implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let ctx: any = document.getElementById('workFlow');
    ctx.height = 232;
    let workFlow = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Quản lý công việc',
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
