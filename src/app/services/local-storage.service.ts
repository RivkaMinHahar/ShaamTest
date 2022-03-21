import { Injectable } from '@angular/core';
import { regional } from '../Models/regional';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
dataR:regional[] | undefined;
  constructor() { }
  get_regions(key:string):regional[]|undefined{
    const storageVal = localStorage.getItem(key);
    const val = storageVal ? JSON.parse(storageVal) : [];
    this.dataR=val;
    return this.dataR;
   }
   set_regions(key:string,data:regional[]):void{
    localStorage.setItem(key,JSON.stringify(data));
   }
}

