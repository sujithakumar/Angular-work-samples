import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentInteractionService } from '../../service/component-interaction.service'

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['../component-interaction-two.component.css']
})
export class Child2Component implements OnInit {

  childBform: FormGroup = this.formBuilder.group({
    name: [''],
    password: [''],
    Phone: ['']
  });
  childA :any;
  constructor(private formBuilder: FormBuilder, private ComponentInteractionService: ComponentInteractionService) { }

  ngOnInit(): void {
    this.childBform
  }

  onSubmit() {
    this.ComponentInteractionService.setChildBData({
      "name": this.childBform.value.name,
      "password": this.childBform.value.password,
      "Phone": this.childBform.value.Phone
    });
  }
  checkForData() {
    this.ComponentInteractionService.getChildAData().subscribe(value => {
      this.childA = value;
    });
  }

}
