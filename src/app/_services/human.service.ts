/**
 * Created by volodymyr.ivchyk on 6/23/18.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Human } from '../human/human.interface';
import { HumanAttributes } from '../human/humanAttributes.interface'

@Injectable()
export class HumanService
{

  private baseUrl = 'http://angulartest.vivasg.com';
  private humanList: Array<Human> = [];

  private readonly headerJson = {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    'Content-Language': 'uk',
    'Accept-Language': 'uk'
  };

  constructor (private http: HttpClient) {}


  /**
   *
   * @returns {Promise}
   */
  getList() {

    let headers = new HttpHeaders(this.headerJson);

    return new Promise( (resolve, reject) =>
      this.http.get(`${this.baseUrl}/human`, { headers: headers}).subscribe(
        (response: any) => {
          if (response.data !== undefined) {
            this.humanList = this.mapHumanData(response.data);
            resolve(this.humanList);
          }  else {
             reject([{'status': 'n/A', title: 'Unknown error'}]);
          }
        },
        (error) => {
          this.handleError(error);
          reject([{'status': '', title: 'We have some issues'}]);
        })
    )
  }


  private mapHumanData(rawData: Array<any> ) {

    return rawData.map(
        humanItem => {
            let human: Human = {
                humanId: humanItem.id,
                humanType: humanItem.type,
                attributes:  {
                    firstName: humanItem.attributes.name_first,
                    lastName: humanItem.attributes.name_last,
                    email: humanItem.attributes.email,
                    birthday: humanItem.attributes.birthday
              }
            }
            return human;
        }
    );
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message)
    } else {
      console.log(error.error.errors)
    }

  };
}
