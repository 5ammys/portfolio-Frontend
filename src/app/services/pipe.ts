import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
     name:"objToArray"
})

export class ObjToArray implements PipeTransform{
     transform(value: any=[]):any[] {
          return Object.values(value);
     }
}