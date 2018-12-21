import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {TestService}from '../test.service';


@Component({
  selector: 'app-clientmodule',
  templateUrl: './clientmodule.component.html',
  styleUrls: ['./clientmodule.component.scss']
})

export class clientmoduleComponent implements OnInit {


  clickMessage = '';
  loading: boolean;
  clientmodule: FormGroup;
  cliname: AbstractControl;
  pjtname: AbstractControl;
  ovalue: AbstractControl;
  condate: AbstractControl;
  dcpt:AbstractControl;
  stdate:AbstractControl;
  pmtterm:AbstractControl;
  
  
  constructor(private router: Router,
    private formBuilder: FormBuilder,private http: HttpClient,private testService:TestService) {


    this.clientmodule = this.formBuilder.group({
      cliname: ['', Validators.required],
      pjtname: ['', Validators.required],
      ovalue: ['', Validators.required],
      condate: ['', Validators.required],
      dcpt:['',Validators.required],
      stdate:['',Validators.required],
      pmtterm:['',Validators.required],



    });


    this.cliname = this.clientmodule.controls['cliname'];
    this.pjtname = this.clientmodule.controls['pjtname'];
    this.ovalue= this.clientmodule.controls['ovalue'];
    this.condate = this.clientmodule.controls['condate'];
    this.dcpt = this.clientmodule.controls['dcpt'];
    this.stdate = this.clientmodule.controls['stdate'];
    this.pmtterm = this.clientmodule.controls['pmtterm'];
  }

  ngOnInit() {

    
  }

  onClick(data) {
   this.testService.validate(data)
    
    //alert("welcome client");
    /*this.loading = true;
    return this.http.post('http://192.168.1.198:7000', this.clientmodule.value).toPromise().then(function (data) {

    }, function (e) {
      console.log(e)
    });*/


    
   /* if (this.clientmodule.valid) {
      alert("requested");
      return this.http.get('http://192.168.1.198', data);


    }
    else {
      alert("sorry");
    }*/




  }


}
