import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {DashboardComponent} from "../dashboard/dashboard.component";

@Component({
  selector: 'app-mood-check',
  templateUrl: './mood-check.component.html',
  styleUrls: ['./mood-check.component.css']
})
export class MoodCheckComponent {
  @ViewChild(DashboardComponent) dashboardComponent!: DashboardComponent;

  @Output() addSadStudent = new EventEmitter<void>();
  @Output() addHappyStudent = new EventEmitter<void>();
  @Output() addAngryStudent = new EventEmitter<void>();
  @Output() addNormalStudent = new EventEmitter<void>();



  triggerAddSad() {
    this.addSadStudent.emit();
  }

  triggerAddHappy() {
    this.dashboardComponent.addHappyStudent();
  }

  triggerAddAngry() {

    this.addAngryStudent.emit();
  }

  triggerAddNormal() {
    this.addNormalStudent.emit();
  }
}
