import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentInteractionOneComponent } from './component-interaction-one/component-interaction-one.component';
import { ComponentInteractionTwoComponent } from './component-interaction-two/component-interaction-two.component';
import { FBIntegrationComponent } from './fb-integration/fb-integration.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { HomeComponent } from './home/home.component';
import { HttpExampleComponent } from './http-example/http-example.component';
import { KeyCompComponent } from './key-comp/key-comp.component';
import { SubVsObsComponent } from './sub-vs-obs/sub-vs-obs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fb', component: FBIntegrationComponent },
  {path:'CI1', component:ComponentInteractionOneComponent},
  {path:'CI2', component:ComponentInteractionTwoComponent},
  {path:'keyComp',component : KeyCompComponent},
  {path:'validation',component: FormValidationComponent},
  {path:'httpEx',component:HttpExampleComponent},
  {path:'subjects-vs-observables',component:SubVsObsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
