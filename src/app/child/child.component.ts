import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() messageFromParent : boolean;
  @Output() messageToEmit = new EventEmitter<boolean>();

  doDisplay:boolean =false;

  constructor() { }

  ngOnInit(): void {
    this.doDisplay =false;
  }

  sendMessageToParent(){
    this.doDisplay = !this.doDisplay;
    this.messageToEmit.emit(this.doDisplay);
  }

}
