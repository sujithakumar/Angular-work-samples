import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-component-interaction-one',
  templateUrl: './component-interaction-one.component.html',
  styleUrls: ['./component-interaction-one.component.css']
})
export class ComponentInteractionOneComponent implements OnInit {

  messageToSend :boolean = false;
  messageFromChild : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.messageToSend = false;
  }

  passInfoToChild(){
    this.messageToSend = !this.messageToSend;
  }

  messageFromChildEvent(ev:boolean){
    this.messageFromChild = ev;
  }


}
