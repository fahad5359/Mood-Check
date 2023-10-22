import {Component, OnInit, ViewChild} from '@angular/core';

import {MoodService} from "../mood.service";
import {Mood} from "../entities/mood";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    mood = { normal: 0,happy: 0, sad:0,angry:0 };

    lineChartData: any; // Define the property

    constructor(private moodService: MoodService) {
        this.updateChartData(); // Initialize the chart data
    }

    ngOnInit() {
        this.moodService.addHappyStudent$.subscribe(() => {
            this.addHappyStudent();
        });
        this.moodService.addNormalStudent$.subscribe(() => {
            this.addNormalStudent();
        });
        this.moodService.addSadStudent$.subscribe(() => {
            this.addSadStudent();
        });

        this.moodService.addAngryStudent$.subscribe(() => {
            this.addAngryStudent();
        });
    }

    addHappyStudent() {
        this.mood.happy += 1;
        this.updateChartData(); // Update the chart data
    }

    addNormalStudent() {
        this.mood.normal += 1;
        this.updateChartData(); // Update the chart data
    }

    addSadStudent() {
        this.mood.sad += 1;
        this.updateChartData(); // Update the chart data
    }

    addAngryStudent() {
        this.mood.angry += 1;
        this.updateChartData(); // Update the chart data
    }

    updateChartData() {
        // Update your chart data here
        this.lineChartData = {
            labels: ["Happy","Normal","Sad","Angry"],
            datasets: [{
                data: [this.mood.happy,this.mood.normal,this.mood.sad,this.mood.angry],
                label: 'Mood Check'
            }]
        };
    }

    getLineChartData() {
        return this.lineChartData; // Return the updated chart data
    }
}
