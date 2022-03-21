import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import{ of, throwError}from'rxjs';
import { environment } from 'src/environments/environment';
//import { map, catchError } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { catchError , concatMap, map} from 'rxjs/operators';
import { regional } from '../Models/regional';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  countries$: Observable<regional[]> | undefined;
  Url: string|undefined;
  regionals: regional[];
  headers: HttpHeaders|undefined;
  country:string|undefined;
 // params: HttpParams|undefined;
  
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    this.Url = environment.apiURL;
    this.regionals=[];
   }



  GetAllCountries(Country:string):Observable<regional[] >{
    //console.log(this.Url);
    this.country=Country;
   
  return this.http.get<regional[]>(this.Url  + this.country, { headers: this.headers })
  //  .pipe(concatMap((value) => {
  //   return this.regionals = value})).subscribe(value => this.regionals.push(value));
  //   // return of( this.regionals);}));//
  //   return this.regionals;

   
}
}