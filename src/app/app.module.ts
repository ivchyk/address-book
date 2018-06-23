import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { NotificationService } from "./_services/notification.service";
import { AppRoutingModule } from './app-routing.module';

import { AddressListComponent }  from  "./address-list/address-list.component";
import { PushRecordComponent } from "./push-record/push-record.component";

@NgModule({
  declarations: [
    AppComponent,
    AddressListComponent,
    PushRecordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
