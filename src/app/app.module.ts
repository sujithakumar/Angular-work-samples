import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FacebookModule } from 'ngx-facebook';

// user defined
import { HomeComponent } from './home/home.component';
import { FBIntegrationComponent } from './fb-integration/fb-integration.component';
import { ComponentInteractionOneComponent } from './component-interaction-one/component-interaction-one.component';
import { ComponentInteractionTwoComponent } from './component-interaction-two/component-interaction-two.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FBIntegrationComponent,
    ComponentInteractionOneComponent,
    ComponentInteractionTwoComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
