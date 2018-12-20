import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { clientmoduleComponent } from './clientmodule/clientmodule.component';
import {ClientdataComponent} from './clientdata/clientdata.component';
const routes: Routes = [

  {
    path:'clientmodule', component:clientmoduleComponent
  },
  {
    path:'clientdata', component:ClientdataComponent
  },
  {
    path:'**', component:clientmoduleComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[clientmoduleComponent, ClientdataComponent];
