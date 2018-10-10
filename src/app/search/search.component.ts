import { IDetail } from './../detail';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailsService } from '../details.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  stateForm: FormGroup;

  showDropDown = false;
 states = ['Alabama', 'Alaska',  'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District of Columbia', 'Florida'
  , 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky'
  , 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina',
  'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington',
   'West Virginia', 'Wisconsin', 'Wyoming'];
   public details = [];
  constructor( private fb: FormBuilder, private _detailsService: DetailsService) {
    this.initForm();
  }

  initForm(): FormGroup {
    return this.stateForm = this.fb.group({
      search: [null]
    });
  }

  ngOnInit() {
    this._detailsService.getdetails().subscribe(data => this.details = data);
  }
 toggleDropDown() {
   this.showDropDown = !this.showDropDown;

 }
 openDropDown() {
  this.showDropDown = false;
}
 getSearchValue() {
  return this.stateForm.value.search;
}
}
