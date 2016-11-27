/**
 * Created by yuval.b on 10/26/2016.
 */

import {Pipe, PipeTransform} from '@angular/core';

// Decide when pipes should be pure / can be set programatically?
@Pipe({name: 'filterBy', pure: false})
export class FilterByPipe implements PipeTransform {
  transform(input: any, filterByMap) {

    // invalid input given
    if (!input || !Array.isArray(input)) { return input; }
    // make a copy of the input's reference
    let value = [...input];

    function filterFunction(item: any) {
      let included = true;
      if (filterByMap['__all__']) {
        included = isIncluded(item, filterByMap['__all__']);
      }
      for (let prop in filterByMap) {
        if (included && filterByMap.hasOwnProperty(prop) && item.hasOwnProperty(prop)) {
          included = isIncluded(item[prop], filterByMap[prop]);
        }
      }
      return included;
    }

    function isIncluded(value, filter) {
      let included;
      if (!filter) {
        included = true;
      } else {
        if (typeof filter === 'string') {
          // string
          included = value.toString().indexOf(filter) !== -1;
        } else if (Array.isArray(filter)) {
          // array
          for (let f of filter) {
            if (!included) {
              included = value.toString().indexOf(f) !== -1;
            }
          }
        } else if (typeof filter === 'object') {
          included = (!filter.hasOwnProperty(value)) || filter[value] === true;
        } else if (typeof filter === 'function') {
          // function
          included = filter(value);
        }
      }
      return included;
    }
    return value.filter(filterFunction);
  }
}
