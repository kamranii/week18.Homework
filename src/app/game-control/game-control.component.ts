import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() scoreUpdated = new EventEmitter<number>();
  score:number = 0;
  interval:any;
  isGameStopped:boolean = true;
 gameStarter(){
  this.isGameStopped = false;
  this.interval = setInterval(() => {this.scoreUpdated.emit(this.score); this.score++;},1000)
 }
 gameStopped(){
  this.isGameStopped = true;
  clearInterval(this.interval);
 }
}
