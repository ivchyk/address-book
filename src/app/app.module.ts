import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { NotificationService } from "./_services/notification.service";
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

import { AddressComponent } from "./human/address.component";
import { AddressListComponent }  from  "./human/address-list/address-list.component";
import { PushRecordComponent } from "./push-record/push-record.component";
import { HumanService } from "./_services/human.service";

@NgModule({
  declarations: [
    AppComponent,
    AddressComponent,
    AddressListComponent,
    PushRecordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    NotificationService,
    HumanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
