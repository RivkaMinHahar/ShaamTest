import { Component, OnInit } from '@angular/core';
import { regionRow } from '../Models/rgionRow';
import { letterRow } from '../Models/letterRow';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import{country} from '../Models/country';
import { CountriesService } from '../services/countries.service'
import { ManageAreaService } from '../services/manage-area.service';
import {  Observable ,BehaviorSubject} from 'rxjs-compat';
import { regional } from '../Models/regional';
import { LocalStorageService } from '../services/local-storage.service';
import { cuntryProp } from '../Models/cuntryProp';

interface ExampleFlatNode {
  expandable: boolean;
  country: string;
  level: number;
}
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  //dataSourceLetters =new NestedTreeControl<country>(node => node.children);
  //dataSourceRegions=new MatTreeNestedDataSource<country>();
  
  regionals:regional[]=[];
  region:string|undefined;
  links:string[] | undefined;
  allbyLetter:country[]=[];
  all:country[]=[];
  selctedCountry= new cuntryProp();
  selected:boolean=false;
  selectedItem:country|undefined;
  //serch:string="";
  private _transformer = (node: country, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      country: node.country,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  
  );
  
treeFlattener = new MatTreeFlattener(
  this._transformer,
  node => node.level,
  node => node.expandable,
  node => node.children,
);
dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
constructor(private manageService:ManageAreaService,private countryService:CountriesService,private stor:LocalStorageService) { 
  this.manage();
  setTimeout(()=>{},5000);
  
}
 hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
 
  ngOnInit(): void {
    setTimeout(() => {
      window.location.reload();
    }, 15000); 
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
  this.filldataSourceRegionsDs(this.regionals);
  
  });
  }
  if(!storH)
  setTimeout(()=>{},3000);
  // =>this.filldataSourceRegionsDs(this.regionals), 3000);
  else
  this.filldataSourceRegionsDs(this.regionals);
  //console.log(this.regionals)
  }
}
filldataSourceRegionsDs(ds:regional[]):void{
  const nochild:country[]=[];
 // this.dataSourceRegions?.data.forEach(ele=>this.dataSourceRegions?.data.pop());
  
ds.forEach(e=>{
  let has:boolean=false;
  let c:string|undefined=e.name?.charAt(0) ;
  this.allbyLetter.forEach(ele=>this.allbyLetter.pop());
  //let parent=new country();
 //let row:country= {"country" : c  , "children?" : null};
 this.all.forEach(e2=>{
   if(c==e2.country)
  has=true;
  });
  if(!has){

     //parent=new country(c ,  nochild);
     //let child =new country();
    ds.forEach(el=>{
    if(c==el.name?.charAt(0))
    {
      if (el.name)
      this.allbyLetter.push({country : el.name })
      //child = new country(JSON.parse(JSON.stringify(el.name)));
      //parent.children?.push(JSON.parse(JSON.stringify(child)));
    }
    })
    if (c)
    this.all.push({"country" : c  , "children" : JSON.parse(JSON.stringify(this.allbyLetter))});
   // this.dataSourceRegions.data.push( JSON.parse(JSON.stringify(parent)));
   this.allbyLetter.forEach(ele=>this.allbyLetter.pop());
  }
  
});
//let k=this.all.length;let i=0;
//while(k>0){
  this.dataSource.data=this.all;
 // this.dataSourceRegions.data.push(this.all[i]);
 // i++;
//  k--;
//}
//this.all.forEach(el=>{
 /// if(el.children&&el.children.length>0)
 //   this.dataSourceRegions.data.push(el);
//})
//if(this.dataSourceRegions){
//this.dataSourceRegions?.data.sort(function (a, b) {
 // return a.country!.localeCompare(b.country!); 
//});
//console.log("fillLettersDs");
//console.log(this.dataSourceRegions);
}
showCountries(link:string){
  link= link.toLowerCase();
  this.selected=false;
  let  str:string="";
  this.regionals.forEach(val=>{
    if(val.name )
  str=val.name;
    if(str.toLowerCase()==link.toLowerCase()){
      this.selected=true;
      this.selctedCountry.name=val.name;
  this.selctedCountry.capital=val.capital;
  this.selctedCountry.population=val.population;
  this.selctedCountry.currencies=val.currencies;
  this.selctedCountry.flag=val.flag;
    }
  })
}
}






  

 