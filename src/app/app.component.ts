import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week18.homework';
  scores =[];
  addScore(score:number){
      // this.scores.shift();
      this.scores.push(score);
  }
  students = [];
  addStudent(student: {name:string, surname:string, age:number}){
    this.students.push(student);
  }
}
