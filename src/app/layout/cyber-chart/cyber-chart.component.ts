import { Component, Input } from '@angular/core';

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

  @Input() heightOfGraph: any;
  
  
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
  }
  
  ngOnInit() {
    this.chartOptions = {
      series: [
        {
          name: "Series Blue",
          // type:'line',
          data: [1.2, 1.5, 0.3, 0.5, 0.7, 1]
        },
        {
          name: "Series Green",
          // type:"area",
          data: [0.6, 1.8, 2, 0.2, 0.7, 1]
        },
      ],
      chart: {
        height: this.heightOfGraph ? this.heightOfGraph : 200,
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
