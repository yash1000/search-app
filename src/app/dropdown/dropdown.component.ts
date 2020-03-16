import { Component, OnInit, ChangeDetectorRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})

export class DropdownComponent implements OnInit {
  data = [];
  search: any;
  info: any;
  chackvalueee: any;
  arrayforcheacked = [];
  values: any;
  datas = [];

  constructor(
    private api: ApisService,
    private cd: ChangeDetectorRef,
    private router: Router){}

  ngOnInit() {
    this.api.getdata().subscribe((res: any) => {
      this.datas = res.data;
      if (!JSON.parse(localStorage.getItem('userids'))) {
        this.data = res.data;
        this.info = res.data;
        $(document).ready(() => {
          $('.butn').click(() => {
            $('.drop').toggle();
          });
        });
        // });
      } else {
        const ids = JSON.parse(localStorage.getItem('userids'));
        this.datas = res.data;
        for (const [i, v] of ids.entries()) {
          for (const [j, w] of this.datas.entries()) {
            if (w.id === v.id) {
              this.datas.splice(j, 1);
              break;
            } else {
            }
          }
        }
        this.data = ids;
        $(document).ready(() => {
          $('.butn').click(() => {
            $('.drop').toggle();
          });
        });
      }
    });
  }

  /**
   * @param name name that is selected in search dropodown
   * @param data data of selected name with ids
   * @param search search string at pipe
   * for select in drop down menu
   */

  getname(name: string, data: any, search) {
    search.value = null;
    if (JSON.parse(localStorage.getItem('userids'))) {
      data.checked = true;
      this.data.push(data);
      localStorage.removeItem('userids');
      localStorage.setItem('userids', JSON.stringify(this.data));
      this.arrayforcheacked.push(data);
        const ids = JSON.parse(localStorage.getItem('userids'));
        for (const [i, v] of ids.entries()) {
          for (const [j, w] of this.datas.entries()) {
            if (w.id === v.id) {
              this.datas.splice(j, 1);
              break;
            } else {
            }
          }
        }
    } else {
      const checkedeeee: any = document.getElementById('checkbox' + data.id);
      if (checkedeeee === null) {
        this.arrayforcheacked.push(data);
      } else {
        checkedeeee.checked = !checkedeeee.checked;
        if (checkedeeee.checked === true) {
          this.arrayforcheacked.push(data);
        } else {
          const index = this.arrayforcheacked.findIndex(d => d === data.id);
          this.arrayforcheacked.splice(index, 1);
        }
      }
    }
  }

  /**
   * @param search for search input null
   * function to triggeres of click of apply button
   */

  chackvalues(search) {
    search.value = null;
    localStorage.setItem('userids', JSON.stringify(this.arrayforcheacked));
    $('.drop').hide();
    const ids = JSON.parse(localStorage.getItem('userids'));
    this.data = ids;
      for (const [i, v] of ids.entries()) {
        for (const [j, w] of this.datas.entries()) {
          if (w.id === v.id) {
            this.datas.splice(j, 1);
            break;
          } else {
          }
        }
      }
      this.data.map(m => (m.checked = false));
      localStorage.removeItem('userids');
      localStorage.setItem('userids', JSON.stringify(this.data));
  }

  /**
   * delete all iten frin localstorage and refresh the array od search menu
   */

   delete() {
    this.data = [];
    this.arrayforcheacked = [];
    localStorage.removeItem('userids');
      this.data=[];
      this.data=this.info;
      $(document).ready(() => {
        $('.drop').toggle();
      });
  }

  /**
   * clear every checkbox (uncheck)
   */

  clear(data) {
    for (const [i, v] of data.entries()) {
      $('#checkbox' + v.id).prop('checked', false);
    }
  }

  /**
   * @param id api data uniq ids
   * @param data array of data call fronm api
   * @param element event for don on input element
   */

  chacked(id, data, element) {
    const ids = JSON.parse(localStorage.getItem('userids'));
    this.values = element.checked;
    if (element.checked === true) {
      if (ids) {
        if (ids.includes(id)) {
        }
      } else {
        this.arrayforcheacked.push(data);
      }
    } else if (element.checked === false) {
      const index = this.arrayforcheacked.findIndex(d => d === id);
      this.arrayforcheacked.splice(index, 1);
    }
  }
}
