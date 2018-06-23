import { Component, OnInit } from '@angular/core';
import { HumanService } from '../../_services/human.service';
import { ToastrService } from 'ngx-toastr';
import { Human } from "../human.interface"

@Component({
  selector: 'address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  public humanList: Array<Human> = [];

  constructor(private humanService: HumanService, private notificationService: ToastrService) { }

  ngOnInit() {
    this.humanService.getList()
      .then((data: any) => {
            this.humanList = data;
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

}
