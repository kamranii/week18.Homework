import { Component } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  anyInput:string = '';
  resetText(){
    this.anyInput = '';
  }
}
