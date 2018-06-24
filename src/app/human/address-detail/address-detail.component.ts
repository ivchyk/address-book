import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { HumanService } from '../../_services/human.service';
import { ToastrService } from 'ngx-toastr';
import { Human } from "../human.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit, OnDestroy {

  human: Human;
  subscription: Subscription;

  constructor (
               private route: ActivatedRoute,
               private humanService: HumanService,
               private router: Router,
               private notificationService: ToastrService ) {}

   ngOnInit() {

     this.subscription =  this.route.data.subscribe((data: {human: Human}) =>
     {
       this.human = data.human;
     })
   }

   ngOnDestroy() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
   }


  onSubmit() {

    const updateItem = {
      type: "human",
      id: this.human.humanId,
      attributes: {
        name_first: this.human.attributes.firstName,
        name_last: this.human.attributes.lastName,
        birthday: this.human.attributes.birthday,
        email: this.human.attributes.email
      }
    };

    this.humanService.updateHuman(this.human.humanId, updateItem).subscribe(
      (data:any) => {
        if (data.data !== undefined ) {
            const updatedHumanRecord: Human = this.human;
            this.humanService.editRecord(updatedHumanRecord);
            this.notificationService.success('success', `Record ${this.human.humanId} was saved!`)
        } else {
          this.notificationService.success('', `We have some issue here!`)
        }
      }
    );
  }

  deleteRecord() {

    this.humanService.deleteRecord(this.human.humanId).subscribe((data: any) => {
        this.notificationService.success('success', 'Item was deleted.');
        this.humanService.sliceRecord(this.human.humanId);
        this.router.navigate(['/address']);
    });
  }
}
