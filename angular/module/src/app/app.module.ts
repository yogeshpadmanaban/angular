import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';
//import { clientmoduleComponent } from './clientmodule/clientmodule.component';
//import { ClientdataComponent } from './clientdata/clientdata.component';

@NgModule({
  declarations: [
    AppComponent,
    NgModel,
    routingComponents
    //clientmoduleComponent,
    //ClientdataComponent,
    
    
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
