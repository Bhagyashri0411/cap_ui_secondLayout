import { Component } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ChartComponent,
  ApexStroke,
  ApexMarkers,
  ApexLegend
} from "ng-apexcharts";

@Component({
  selector: 'app-cyber-chart',
  templateUrl: './cyber-chart.component.html',
  styleUrls: ['./cyber-chart.component.scss']
})
export class CyberChartComponent {
  public chartOptions: Partial<{
    series: ApexAxisChartSeries;
    chart: ApexChart;
    title: ApexTitleSubtitle;
    stroke: ApexStroke;
    fill: ApexFill;
    markers: ApexMarkers;
    xaxis: ApexXAxis;
    legend:ApexLegend;
  }>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Series Blue",
          data: [80, 50, 30, 40, 100, 20]
        },
        {
          name: "Series Green",
          data: [20, 30, 40, 80, 20, 80]
        },
        {
          name: "Series Orange",
          data: [44, 76, 78, 13, 43, 10]
        }
      ],
      chart: {
        height: 200,
        type: "radar",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: true,
          tools:{
            download:false,
          }
        },
      },

      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.4
      },
      markers: {
        size: 0
      },
      legend:{
        show:false
      },
      xaxis: {
        categories: ["Govern (GV)", "Identity (ID)", "Protect (PR)", "Detect (DE)", "Respond (RS)", "Recover (RC)"],
        labels: {
          show: true,
          style: {
            colors: ["#000", "#000", "#000", "#000", "#000", "#000"],
            fontSize: "8px",
            fontWeight:'bold',
            fontFamily: 'Arial'
          }
        },
      }
    };
  }
}
