import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mood-check',
  templateUrl: './mood-check.component.html',
  styleUrls: ['./mood-check.component.css']
})
export class MoodCheckComponent {
  @Output() moodSelected = new EventEmitter<string>();

  selectMood(mood: string) {
    console.log(mood);
    this.moodSelected.emit(mood);
  }
}
