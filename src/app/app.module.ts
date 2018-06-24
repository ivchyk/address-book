import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { NotificationService } from "./_services/notification.service";
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { AddressComponent } from "./human/address.component";
import { AddressListComponent }  from  "./human/address-list/address-list.component";
import { PushRecordComponent } from "./human/push-record/push-record.component";
import { HumanService } from "./_services/human.service";
import { Error404Component } from './error/error404.component';
import { AddressDetailResolver } from "./_services/address-detail-resolver.service"
import { AddressRouteActivator } from "./_services/address-route-activator.service"
import { AddressDetailComponent } from "./human/address-detail/address-detail.component"
import { AddressStartComponent } from "./human/address-start.component";
import { ShowErrorComponent } from "./validate/show-error.component";

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddressListComponent,
    PushRecordComponent,
    Error404Component,
    AddressDetailComponent,
    AddressStartComponent,
    ShowErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NotificationService,
    HumanService,
    AddressDetailResolver,
    AddressRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
