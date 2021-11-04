import { Statistic } from './../../interfaces/statistic.interface';
import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/interfaces/square.interface';
import { Tab } from 'src/app/interfaces/tab.interface';

import Chart from 'chart.js';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  public img1:string = "assets/icons/down.svg";
  public img2:string = "assets/icons/downl.svg";

  public tabs: Tab[] = [
    {
      active: true,
      name: "All"
    }, {
      active: false,
      name: "In Progress"
    }, {
      active: false,
      name: "Started"
    }, {
      active: false,
      name: "Completed"
    },
  ];

  public squares: Square[] = [{
    title: "Order #890PO90",
    name: "Bryan Williams",
    progress: 20,
    days: 1
  }, {
    title: "Order #890PO90",
    name: "Marcus Klaus ",
    progress: 30,
    days: 3
  }];

  public statistics: Statistic[] = [{
    description: "Total projects",
    total: 50,
    //icon: "assets/icons/menu.svg" //icono no del mismo tamaño
    icon: "assets/icons/menu.svg"
  }, {
    description: "Completed",
    total: 15,
    icon: "assets/icons/checked.svg"
  }, {
    description: "In Progress",
    total: 10,
    icon: "assets/icons/flash.svg"
  }, {
    description: "Delayed",
    total: 2,
    icon: "assets/icons/clock.svg"
  },];

  public opciones: any = [{
    title:"Day",
    active: false
  },{
    title:"Week",
    active: false
  },{
    title:"Month",
    active: true
  },{
    title:"Year",
    active: false
  },];

  public months:any[]=[{
    title: "Jun"
  },{
    title: "Jul"
  },{
    title: "Aug"
  },{
    title: "Sep"
  },{
    title: "Oct"
  },{
    title: "Nov"
  },];

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {

      let draw = Chart.controllers.line.prototype.draw;
      Chart.controllers.line = Chart.controllers.line.extend({
        draw: function () {
          draw.apply(this, arguments);
          let ctx = this.chart.chart.ctx;
          let _stroke = ctx.stroke;
          ctx.stroke = function () {
            ctx.save();
            ctx.shadowColor = '#f1b402';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 10;
            _stroke.apply(this, arguments)
            ctx.restore();
          }
        }
      });

      //Chart.defaults.font.weight = '600';

      let ctx: any = document.getElementById('myChart');
      console.log(ctx);

      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
          datasets: [{
            data: [5, 8, 3, 9, 8, 10],
            /* backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ], */

            borderColor: 'rgba(241, 180, 2,1)',
            //pointBackgroundColor: "#fff",
            pointBorderColor: "rgba(241, 180, 2,0)",
            /* pointHoverBackgroundColor: "#ffb88c",
            pointHoverBorderColor: "#fff",
            pointRadius: 4,
            pointHoverRadius: 4, */
            fill: false,

            borderWidth: 2
          }]
        },
        options: {
          title: {
            display: false,
          },
          legend: {
            display: false
          },
          scales: {
            yAxes: [{
              gridLines: {
                display: false,
              },
              ticks: {
                display: false
              }
            },
            ],
            xAxes: [{
              gridLines: {
                display: false,
              },
              ticks: {
                display: false
              }
            }],
            gridLines: { zeroLineColor: 'transparent' },

          },
        }

        /* options: {
          scales: {
            yAxes: [{
              gridLines: {
                drawBorder: false,
              },
            }],
            xAxes: [{
              gridLines: {
                display: false,
              },
            }]
          },
          plugins: {
            responsive: true,
            legend: {
              display: false,
              labels: {
                font: {
                  style: 'italic',
                  weight: '600',
                }
              }
            },
            labels: false
          }
        } */
      });
    }, 1000);
  }

}
