import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, Form } from "@angular/forms";

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  emailValidationPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  mobileValidationPattern: string = "^((\\+91-?)|0)?[0-9]{10}$";
  formA: FormGroup = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailValidationPattern)]],
    name: ['', Validators.required],
    phone: ['', [Validators.maxLength(10),Validators.minLength(10),Validators.pattern(this.mobileValidationPattern)]]
  });

  submitted:boolean= false;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
  }
 


}
