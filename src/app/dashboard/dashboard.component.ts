import {Component, ViewChild} from '@angular/core';
import { Mood } from "../entities/mood";
import {MoodCheckComponent} from "../mood-check/mood-check.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  private mood: Mood;

  constructor() {
    this.mood = new Mood(0, 0, 0, 0);
  }

  get lineChartData() {
    return {
      labels: ["Sad", "Happy", "Angry", "Normal"],
      datasets: [{
        data: [this.mood.sad, this.mood.happy, this.mood.angry, this.mood.normal],
        label: 'Mood Check'
      }]
    };
  }

public  addNormalStudent() {
    this.mood.normal += 1;
  }

  public addSadStudent(){
    this.mood.sad += 1;
  }
  public addAngryStudent(){
    this.mood.angry += 1;
  }
  public addHappyStudent(){
    this.mood.happy += 1;
  }





}
