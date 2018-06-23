import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './human//address.component';
import { PushRecordComponent } from './push-record/push-record.component'

const routes: Routes = [
  { path: '', redirectTo: '/address', pathMatch: 'full' },
  { path: 'address', component: AddressComponent },
  { path: 'push-record', component: PushRecordComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
