import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class EmployeeFilterPipe implements PipeTransform {
  finalsearch: any;
  /**
   * @param search get array anf search string from dropdown menu
   */
  transform(info: any, search: string) {
    if (!info || !search) {
      const matchedterms = [];
      return matchedterms;
    } else {
      return this.searchfunction(info, search);
    }
  }
  /**
   * function for filter mathoe with each cheracter of array in lowercase
   */
  searchfunction(info: any, search: string) {
    const matchedterms = [];
    const searchterm = search.toLowerCase();
    info.forEach(m => {
      if (m.name.toLowerCase().indexOf(searchterm) !== -1) {
        matchedterms.push(m);
      }
      this.finalsearch = matchedterms;
    });
    return this.finalsearch;
  }
}
