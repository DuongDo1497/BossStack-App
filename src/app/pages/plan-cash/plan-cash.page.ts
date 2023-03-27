import { Chart, registerables } from 'chart.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-cash',
  templateUrl: './plan-cash.page.html',
  styleUrls: ['./plan-cash.page.scss'],
})
export class PlanCashPage implements OnInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    let ctx: any = document.getElementById('cashPlan');
    ctx.height = 232;
    let cashPlan = new Chart(ctx.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Kế hoạch dòng tiền',
            data: [300, 50],
            backgroundColor: ['#38D29E', '#F1F1F1'],
          },
        ],
      },
      options: {
        cutout: '75%',
      },
    });
  }
}
