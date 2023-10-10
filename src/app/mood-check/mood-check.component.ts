import { Component } from '@angular/core';

@Component({
  selector: 'app-mood-check',
  templateUrl: './mood-check.component.html',
  styleUrls: ['./mood-check.component.css']
})
export class MoodCheckComponent {

  public testt(mood: string){
    console.log(mood)
  }
}
