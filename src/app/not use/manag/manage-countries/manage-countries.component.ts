import { Component,  OnInit, OnDestroy  } from '@angular/core';
import { CountriesService } from '../../../services/countries.service'
import { ManageAreaService } from '../../../services/manage-area.service';
import {  Observable ,BehaviorSubject} from 'rxjs-compat';
import { regional } from '../../../Models/regional';
import {MatSidenavModule} from '@angular/material/sidenav'
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { regionRow } from '../../../Models/rgionRow';
import { letterRow } from '../../../Models/letterRow';
import { delay, forEach } from 'lodash';
import { map, filter, tap } from 'rxjs/operators/'
import {MatListModule} from '@angular/material/list';
import { observable } from 'rxjs';
import { LocalStorageService } from '../../../services/local-storage.service';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-manage-countries',
  templateUrl: './manage-countries.component.html',
  styleUrls: ['./manage-countries.component.scss'],
   animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ManageCountriesComponent implements OnInit {

  dataSourceLetters:letterRow[]|undefined;
  dataSourceRegions:regionRow[]|undefined;
  region:string|undefined;
  links:string[] | undefined;
  displayedColumns: string[];
  letterCoulmns: string[];
  selectedRow: letterRow[]|undefined;
  selectedRegionRow:regionRow[]|undefined;
  regionals:regional[];
  data = undefined;
  isHidden:boolean;
  constructor(private manageService:ManageAreaService,private countryService:CountriesService,private stor:LocalStorageService) {
    console.log("hello ManageRegionsComponent");
    this.displayedColumns=["regional"];
    this.letterCoulmns=["letter"];
    this.regionals=[];
    this.dataSourceLetters=[];
    this.dataSourceRegions=[];
    this.manage();
    this.isHidden=true;
    //["Capital","Population","currencies","Flag"];
   }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }
  async manage(){
  let  storH:boolean=false;
this.region=this.manageService.RandomRagion();
console.log(this.region);
this.stor.get_regions(this.region)?.forEach(val=>this.regionals.push(val));
if(this.regionals){
if(this.regionals?.length>0)
storH=true;
else{
 await this.countryService.GetAllCountries(this.region)
.subscribe((data)=>{
  //console.log(data);
  this.regionals=data;
this.fillLettersDs(this.regionals);

});
}
if(!storH)
setTimeout(() =>this.fillLettersDs(this.regionals), 3000);
else
this.fillLettersDs(this.regionals);
//console.log(this.regionals)
}
  }
fillLettersDs(ds:regional[]):void{
  this.dataSourceLetters?.forEach(ele=>this.dataSourceLetters?.pop());
ds.forEach(ele=>{
  let has:boolean=false;
 let row:letterRow= {"letter":ele.name?.charAt(0),"isExpanded":false};
 this.dataSourceLetters?.forEach(ele=>{
   if(row.letter==ele.letter)
  has=true;
  });
  if(has==false)
  this.dataSourceLetters?.push(row);
});
if(this.dataSourceLetters){
this.dataSourceLetters?.sort(function (a, b) {
  return a.letter!.localeCompare(b.letter!); 
});
console.log("fillLettersDs");
console.log(this.dataSourceLetters);
}
}
fillRegionsDS(row:letterRow):void{
  let c1;
  let c2;
  this.dataSourceRegions?.forEach(ele=>this.dataSourceRegions?.pop());
  if(this.regionals){
    this.regionals.forEach(ele=>{
      let Rrow:regionRow ={"region":ele.name,"isExpanded":false,"letter":ele.name?.charAt(0)};
      c1=Rrow.region?.charAt(0).toUpperCase();
      c2=row.letter?.charAt(0).toUpperCase();
      if(c1===c2){
        this.dataSourceRegions?.push(Rrow);
      }
     })
  if(this.dataSourceRegions){
  this.dataSourceRegions?.sort(function (a, b) {
    return a.letter!.localeCompare(b.letter!); 
  });
}
  }
}
showInfo(link:letterRow){

}

showCountries(link:letterRow){
  this.isHidden=false;
this.fillRegionsDS(link);
console.log(this.dataSourceRegions)
}


setLetterCountries(row: letterRow) {
  if(!row.isExpanded)
  {
    if(this.dataSourceRegions){
    this.dataSourceRegions.forEach(function(element) {
         element.isExpanded= false;
      })
    }
  this.selectedRow = undefined;
  var listRow: letterRow []=[];
 // console.log(row);
  row.isExpanded=true;
  let len = listRow.push(row);
  if (len == 1){
  this.selectedRow=listRow;
  this.fillRegionsDS(row);
  }
  }
  //close open row
  else if(row.isExpanded)
  {
    this.selectedRow = undefined;
   // this.isTableExpanded=false;
    row.isExpanded=false;
    //this.isHiddenOrder = true;
  }

}
setRegionDetails(row: regionRow) {
  if(!row.isExpanded)
  {
    if( this.dataSourceRegions){
    this.dataSourceRegions.forEach(function(element) {
         element.isExpanded= false;
      })
    }
  this.selectedRegionRow = undefined;
  var listRow: regionRow []=[];
 // console.log(row);
  row.isExpanded=true;
  let len = listRow.push(row);
  if (len == 1)
  this.selectedRegionRow =listRow;
  }
  //close open row
  else if(row.isExpanded)
  {
    this.selectedRegionRow = undefined;
   // this.isTableExpanded=false;
    row.isExpanded=false;
    //this.isHiddenOrder = true;
  }

}

trackByLinkLetter(index: number, letter:any): string {
  return letter.letter;
}

}


