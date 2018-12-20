
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from 
'@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


  
})

export class AppComponent {
  
  client: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

  
    ngOnInit() {
  
  
  

  
}


}