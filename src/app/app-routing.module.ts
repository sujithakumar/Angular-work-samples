import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentInteractionOneComponent } from './component-interaction-one/component-interaction-one.component';
import { ComponentInteractionTwoComponent } from './component-interaction-two/component-interaction-two.component';
import { FBIntegrationComponent } from './fb-integration/fb-integration.component';
import { HomeComponent } from './home/home.component';
import { KeyCompComponent } from './key-comp/key-comp.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'fb', component: FBIntegrationComponent },
  {path:'CI1', component:ComponentInteractionOneComponent},
  {path:'CI2', component:ComponentInteractionTwoComponent},
  {path:'keyComp',component : KeyCompComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
