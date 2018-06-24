import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './human//address.component';
import { PushRecordComponent } from './human/push-record/push-record.component'
import { AddressStartComponent} from './human/address-start.component'
import { AddressDetailComponent } from './human/address-detail/address-detail.component'
import { AddressDetailResolver } from "./_services/address-detail-resolver.service"
import { AddressRouteActivator } from "./_services/address-route-activator.service"
import { Error404Component } from './error/error404.component';

const routes: Routes = [
  { path: '', redirectTo: '/address', pathMatch: 'full' },
  { path: 'address', component: AddressComponent,
      children: [
        { path: '', component: AddressStartComponent },
         { path: 'push-record', component: PushRecordComponent },
        { path: ':id', component: AddressDetailComponent,
          resolve: {
            human: AddressDetailResolver
          },
          canActivate: [AddressRouteActivator]
        },
      ]},
  { path: '404', component: Error404Component },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
