import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-fb-integration',
  templateUrl: './fb-integration.component.html',
  styleUrls: ['./fb-integration.component.css']
})
export class FBIntegrationComponent implements OnInit {

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '1234566778',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);

  }

  ngOnInit(): void {
  }

  
  loginWithFacebook(): void {

    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));

  }

}
