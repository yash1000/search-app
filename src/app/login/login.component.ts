import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ApisService } from '../apis.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  profileForm: FormGroup;
  authtoken: any;
  id:Number;
  data: any;
  dropdownsetting:IDropdownSettings;
  dropdownlist: any;
  constructor(private api:ApisService,private router: Router) { }

  ngOnInit() {
    this.profileForm=new FormGroup({
      username: new FormControl(),
      password:new FormControl(),
    })
  }
  
  onSubmit1(event){
    
    console.log(this.profileForm.value);
this.api.apicall(this.profileForm.value).subscribe((res:any)=>{
  console.log(res);
  console.log("res from api")
  this.authtoken=res.data.api_token;
  console.log(this.authtoken)
  localStorage.setItem('user',this.authtoken);
})
this.router.navigate(["/dropdown"])


  }

}
