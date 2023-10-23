import { Component } from '@angular/core';
import {StudentsNames} from "../entities/students-names";

@Component({
  selector: 'app-student-name',
  templateUrl: './student-name.component.html',
  styleUrls: ['./student-name.component.css']
})
export class StudentNameComponent {
    panelOpenState = false;

    studentNames : StudentsNames;
  constructor() {
      this.studentNames = new StudentsNames(["Fahad","Asma","Kolaib"])
  }
}
