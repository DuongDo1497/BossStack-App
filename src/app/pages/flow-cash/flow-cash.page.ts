import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-flow-cash',
  templateUrl: './flow-cash.page.html',
  styleUrls: ['./flow-cash.page.scss'],
})
export class FlowCashPage implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let ctx: any = document.getElementById('cashFlow');
    ctx.height = 232;
    let cashFlow = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Bóc tách dòng tiền',
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
