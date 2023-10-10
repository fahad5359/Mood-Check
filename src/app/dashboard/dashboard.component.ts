import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartData: any = [];
  chartOptions: any = {}; // Define chart options here

  ngOnInit(): void {
    // Load your chart data here
    this.chartData = [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 5],
      ['Sleep', 7],
    ];

    // Define chart options with width and height as numbers
    this.chartOptions = {
      width: 500,
      height: 300
      // Add any other chart options you need here
    };
  }
}
