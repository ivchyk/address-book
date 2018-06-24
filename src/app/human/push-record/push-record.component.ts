import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { HumanService } from "../../_services/human.service";
import { ToastrService } from 'ngx-toastr';
import { Human } from "../human.interface";

@Component({
  selector: 'app-push-record',
  templateUrl: './push-record.component.html',
  styleUrls: ['./push-record.component.css']
})
export class PushRecordComponent implements OnInit {

  public humanId: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public birthday: string;
  public readonly humanType: string = "human";

  constructor(private humanService: HumanService,
              private notificationService: ToastrService,
              private router: Router) { }

  ngOnInit() {


  }

  onSubmit() {
    const newItem = {
      type: this.humanType,
      attributes: {
        name_first: this.firstName,
        name_last: this.lastName,
        birthday: this.birthday,
        email: this.email
      }
    };
    this.humanService.sendData(newItem)
      .subscribe(
        (data: any) => {
          if (data.data !== undefined ) {
              this.humanId = data.data['id'];
              const human: Human = {
                humanId: this.humanId,
                humanType: this.humanType,
                attributes: {
                  firstName: this.firstName,
                  lastName: this.lastName,
                  email: this.email,
                  birthday: this.birthday,
                }
              };
              this.humanService.addHumanRecord(human);
              this.notificationService.success('success', `Record pushed!`);
              const goBack = `/address/${this.humanId}`;
              this.router.navigate([goBack]);

          } else {
            this.notificationService.error('', `Something went wrong`);
          }
        }
      );
  }

}
