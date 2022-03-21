import { currency } from "./currency";

export class cuntryProp{
    name?:string;
    capital?:string;
    population?:number;
    currencies?:currency[];
    flag?:string;
    onstructor(n:string,cap: string,pop:number,cur:currency[],fla:string ) {
        this.name=n;
        this.capital = cap;
        this.population = pop;
        this.currencies=cur;
        this.flag=fla;
    }
}
