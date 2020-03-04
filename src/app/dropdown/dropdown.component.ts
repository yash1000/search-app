import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  data: any;
  dropdownsetting:IDropdownSettings;
  dropdownlist: any;
  constructor(private api:ApisService) { }

  ngOnInit() {
    this.api.data().subscribe((res:any)=>{
      console.log(res);
      console.log("res of data")
    
      this.data=res.data
      console.log(this.data)
      console.log("data")
      
      // this.router.navigate(["/login"]);
      this.dropdownlist=this.data;
      console.log(this.dropdownlist)
    
      this.dropdownsetting={
        idField:'id',
        singleSelection:false,
        textField:'name',
        selectAllText:'select All',
        unSelectAllText:'Unselect all',
        itemsShowLimit:5,
        allowSearchFilter:true
      }
    })
  }
  onfilter(event){
    console.log("ooooooooooooooooooo")
  }
  onitemselect(item:any){
    console.log(item)
  }
  onselectall(items:any){
    console.log(items)
  }
}
