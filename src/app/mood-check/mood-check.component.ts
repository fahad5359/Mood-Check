import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";
import {MoodService} from "../mood.service";

@Component({
  selector: 'app-mood-check',
  templateUrl: './mood-check.component.html',
  styleUrls: ['./mood-check.component.css']
})
export class MoodCheckComponent {
  constructor(private moodService: MoodService) {}

  triggerAddHappy() {
    this.moodService.triggeraddHappyStudent();
  }

  triggerAddNormal() {
    this.moodService.triggerAddNormalStudent();
  }
  triggerAddSad() {
    this.moodService.triggerSadStudent();
  }
  triggerAddAngry() {
    this.moodService.triggerAngryStudent();
  }
}
