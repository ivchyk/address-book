import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressListComponent } from './address-list/address-list.component';
import { PushRecordComponent } from './push-record/push-record.component'

const routes: Routes = [
  { path: '', redirectTo: '/address-list', pathMatch: 'full' },
  { path: 'address-list', component: AddressListComponent },
  { path: 'push-record', component: PushRecordComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
