import { Component, OnInit } from '@angular/core';
import { HumanService } from '../../_services/human.service';
import { ToastrService } from 'ngx-toastr';
import { Human } from "../human.interface";
import * as _ from 'lodash';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  public humanList: Array<Human> = [];
  public displayData: Array<Human> = [];
  public searchKey = '';
  public length = 100;
  public pageSize = 7;
  public pageSizeOptions = [5, 7, 10, 25, 100];
  public pagedItems: any[];
  public currentPage: number = 1;
  public pageEvent: PageEvent;

  constructor (private humanService: HumanService, private notificationService: ToastrService) { }

  ngOnInit() {

    this.humanService.getList()
      .then((data: any) => {
            this.humanList = data;
            this.displayData = data;
            this.setPage(1);
            this.notificationService.success("Done", "Here are data you've looked for!")
      },
      (data: Array<any>) => {
          if (data.length > 0) {
            for (let error of data) {
              this.notificationService.error(error.status, error.title);
            }
          }
      });
  }

  /**
   *
   * @param page
   */
  setPage(page: number ) {

    this.currentPage = page;
    this.length = this.displayData.length;
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = Math.min(startIndex + this.pageSize - 1, this.length - 1);
    this.pagedItems = this.displayData.slice(startIndex, endIndex + 1);
  }


  updatePageEvent($event) {

    this.pageSize = $event.pageSize;
    this.length = $event.length;
    this.currentPage = $event.pageIndex + 1;
    this.setPage(this.currentPage);
  }



  searchAddressItem($event) {

    if ($event.code === "Enter") {
      this.filterBySearchKey();
    }
  }

  searchClick() {

    this.filterBySearchKey();
  }

  private filterBySearchKey():void {

    if (!this.searchKey || this.searchKey.length === 0) {
      this.displayData = this.humanList;
    } else {
      let queryTextLower = this.searchKey.toLowerCase();
      let filteredByName: Human[] =
        this.humanList.filter(
          (humanItem: Human) => {
            return humanItem.attributes.firstName.toLocaleLowerCase().indexOf(queryTextLower) > -1 ||
              humanItem.attributes.lastName.toLocaleLowerCase().indexOf(queryTextLower) > -1 ||
              humanItem.attributes.email.toLocaleLowerCase().indexOf(queryTextLower) > -1

          });
      let filteredById: Human[] = this.humanList.filter((humanItem: Human) => {

        return humanItem.humanId == +this.searchKey
      } );

      this.displayData = _.unionBy( filteredById, filteredByName, "humanId");

    }
    this.length = this.displayData.length;
    this.currentPage = 1;
    this.setPage(1);
  }
}
