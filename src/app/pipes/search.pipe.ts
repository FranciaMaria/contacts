import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
   /*if (!items) return [];
   return items.filter(it => it[field] == value);
	}*/
	if(!args) {return value;}
	return value.filter(item => item.firstName.startsWith((args)));
	}

}
