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
  name: AbstractControl;
  gender: AbstractControl;
  address: AbstractControl;
  mobile: AbstractControl;
  mail: AbstractControl;
  
  
  constructor(private router: Router,
    private formBuilder: FormBuilder,private http: HttpClient,private testService:TestService) {


    this.clientmodule = this.formBuilder.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required],
      mail: ['', Validators.required]


    });


    this.name = this.clientmodule.controls['name'];
    this.address = this.clientmodule.controls['address'];
    this.mobile = this.clientmodule.controls['mobile'];
    this.mail = this.clientmodule.controls['mail'];
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
