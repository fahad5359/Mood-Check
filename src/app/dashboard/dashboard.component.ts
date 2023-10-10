import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // chart: Highcharts.Chart;

  // constructor() {
  //   this.chart = new Highcharts.Chart({
  //     chart: {
  //       type: 'column'
  //     },
  //     title: {
  //       text: 'Mood Statistics'
  //     },
  //     plotOptions: {
  //       column: {
  //         stacking: 'normal'
  //       }
  //     },
  //     series: [
  //       {
  //         type: 'column',
  //         name: 'Happy',
  //         color: 'green',
  //         data: [0, 0, 0, 0, 0]
  //       },
  //       {
  //         type: 'column',
  //         name: 'Normal',
  //         color: 'blue',
  //         data: [0, 0, 0, 0, 0]
  //       },
  //       {
  //         type: 'column',
  //         name: 'Sad',
  //         color: 'red',
  //         data: [0, 0, 0, 0, 0]
  //       },
  //       {
  //         type: 'column',
  //         name: 'Angry',
  //         color: 'orange',
  //         data: [0, 0, 0, 0, 0]
  //       }
  //     ]
  //   });
  // }

  // // Function to update the chart based on button click
  // add(mood: string) {
  //   // Define the index of the series based on the mood
  //   let seriesIndex = -1;
  //   switch (mood) {
  //     case 'Happy':
  //       seriesIndex = 0;
  //       break;
  //     case 'Normal':
  //       seriesIndex = 1;
  //       break;
  //     case 'Sad':
  //       seriesIndex = 2;
  //       break;
  //     case 'Angry':
  //       seriesIndex = 3;
  //       break;
  //   }

  //   // Check if the series index is valid
  //   if (seriesIndex >= 0 && seriesIndex < this.chart.series.length) {
  //     // Update the data for the corresponding series
  //     this.chart.series[seriesIndex].addPoint(1); // Add 1 to the data point
  //   }
  // }
}
