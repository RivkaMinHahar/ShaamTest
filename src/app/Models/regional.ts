import { currency } from "./currency";
import { flag } from "./flag";
import { language } from "./language";
import {translation} from "./translation"
import { regionalBloc } from "./regionalBloc";
export class regional{
name:string| undefined;
topLevelDomain:string[]|undefined;
alpha2Code:string| undefined;
alpha3Code:string| undefined;
callingCodes:number[]|undefined;
capital:string| undefined;
altSpellings:string[]|undefined;
subregion:string| undefined;
region:string| undefined;
population:number| undefined;
latlng:number[]|undefined;
demonym:string| undefined;
area:number| undefined;
gini:number| undefined;
timezones:string[]|undefined;
borders:string[]|undefined;
nativeName:string|undefined;
numericCode:string|undefined;
flags:flag|undefined;
currencies:currency[]| undefined;
languages:language[]|undefined;
translations:translation|undefined;
flag:string|undefined;
regionalBlocs:regionalBloc[]|undefined;
cioc:string|undefined;
independent:boolean|undefined;
isExpanded:boolean|undefined;
}

