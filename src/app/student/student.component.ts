import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Output() studentCreated = new EventEmitter<{name:string, surname:string, age:number}>();
  name:string;
  surname:string;
  age:number;
  createStudent(studentName:string, studentSurname:string, studentAge:number){
    this.studentCreated.emit({
      name: studentName,
      surname: studentSurname,
      age: studentAge
    })
  }
}
