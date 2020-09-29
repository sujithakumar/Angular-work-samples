import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentInteractionService } from '../../service/component-interaction.service'

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['../component-interaction-two.component.css']
})
export class Child1Component implements OnInit {

  childAform: FormGroup =this.formBuilder.group({
    name: [''],
    password: [''],
    Phone: ['']
  });

  childB:any; 
  constructor(private formBuilder: FormBuilder, private ComponentInteractionService: ComponentInteractionService) { }

  ngOnInit(): void {

  }

  onSubmit() {
   
    this.ComponentInteractionService.setChildAData(
      {
        "name": this.childAform.value.name,
        "password": this.childAform.value.password,
        "Phone": this.childAform.value.Phone
    });
  }

  checkForData() {
    this.ComponentInteractionService.getChildBData().subscribe(value => {

      this.childB = value;

    });
  }

}
