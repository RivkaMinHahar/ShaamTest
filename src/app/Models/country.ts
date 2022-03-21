export class country{
country:string;
children?:country[];

constructor(count: string, child?: country[]) {
    this.country = count;
    this.children = child;
}

}