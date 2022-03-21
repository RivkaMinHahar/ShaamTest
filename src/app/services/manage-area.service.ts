import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
@Injectable({
  providedIn: 'root'
})
export class ManageAreaService {

  AllRegions:string[]=["EU","EFTA","CARICOM","PA","AU","USAN","EEU","AL","ASEAN","CAIS","CEFTA","NAFTA","SAARC"]
  constructor() { }
  
  
RandomRagion():string{
  let i=Math.floor(Math.random() * this.AllRegions.length);
  return this.AllRegions[i];
}
}
