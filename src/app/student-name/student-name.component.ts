import { Component } from '@angular/core';
import {StudentsNames} from "../entities/students-names";

@Component({
  selector: 'app-student-name',
  templateUrl: './student-name.component.html',
  styleUrls: ['./student-name.component.css']
})
export class StudentNameComponent {
    showMoodComponent=false;
    studentNames : StudentsNames;
  constructor() {

      this.studentNames = new StudentsNames(["Fahad","Asma","Kolaib"])
  }
  displayMood() {
    console.log("Mood displayed")
      this.showMoodComponent = !this.showMoodComponent;
      // Using ngFor show and hide component based on a button press.

  }
}
