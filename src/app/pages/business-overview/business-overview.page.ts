import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-business-overview',
  templateUrl: './business-overview.page.html',
  styleUrls: ['./business-overview.page.scss'],
})
export class BusinessOverviewPage implements OnInit {
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

    let ctx1: any = document.getElementById('statistical');
    ctx1.height = 300;
    let cashPlan = new Chart(ctx1.getContext('2d'), {
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

    let ctx2: any = document.getElementById('collectChart');
    ctx2.height = 232;
    let collectChart = new Chart(ctx2.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Chi tiết thu',
            data: [300, 50, 100, 200],
            backgroundColor: ['#78D6FC', '#00A5F3', '#1BCD91', '#FFC231'],
          },
        ],
      },
      options: {
        cutout: '75%',
      },
    });

    let ctx3: any = document.getElementById('spendChart');
    ctx3.height = 232;
    let spendChart = new Chart(ctx3.getContext('2d'), {
      type: 'doughnut',
      data: {
        datasets: [
          {
            label: 'Chi tiết chi',
            data: [300, 50, 100, 200],
            backgroundColor: ['#78D6FC', '#00A5F3', '#1BCD91', '#FFC231'],
          },
        ],
      },
      options: {
        cutout: '75%',
      },
    });

    let ctx4: any = document.getElementById('statistical1');
    ctx4.height = 300;
    let statistical1 = new Chart(ctx4.getContext('2d'), {
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
          {
            type: 'line',
            label: '',
            data: [5, 25, 35, 45, -20, -30, -40, -10, 5, 25, 35, 45],
            borderColor: ['#FFC800'],
          },
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
