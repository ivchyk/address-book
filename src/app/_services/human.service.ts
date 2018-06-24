/**
 * Created by volodymyr.ivchyk on 6/23/18.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Human } from '../human/human.interface';

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


  /**
   *
   * @param id
   * @returns {any}
   */
  getHumanById(id: number) {
    if ( this.humanList.length == 0 ) {
      return this.getItem(id)
        .then( (human: Human) => {
          return new Promise(resolve => resolve(human))
        });
    } else {
      const human = this.humanList.find((humanItem) => humanItem.humanId == id);
      return new Promise(resolve => resolve(human))
    }
  }


  /**
   *
   * @returns {Promise}
   */
  getItem(id: number) {

    let headers = new HttpHeaders(this.headerJson);

    return new Promise( (resolve, reject) =>
      this.http.get(`${this.baseUrl}/human/${id}`, { headers: headers}).subscribe(
        (response: any) => {
          if (response.data !== undefined) {
            const humanItem = response.data;
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
            this.humanList.push(human);
            resolve(human);
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

  /**
   *
   * @param humanId
   * @param data
   */
  updateHuman(humanId: number, data: any) {

    const body = JSON.stringify({data:data});
    const headers = new HttpHeaders(this.headerJson);

    return this.http.patch(`${this.baseUrl}/human/${humanId}`, body, { headers: headers })
  }

  /**
   *
   * @param updatedHumanRecord
   */
  editRecord(updatedHumanRecord: Human): void {

    for (let humanKey in this.humanList) {
      if (this.humanList[humanKey].humanId == updatedHumanRecord.humanId) {
        this.humanList[humanKey] = updatedHumanRecord;
        break;
      }
    }
  }


  sendData(humanRecord: any) {

    const body = JSON.stringify({data:humanRecord});
    const headers = new HttpHeaders(this.headerJson);

    return this.http.post(`${this.baseUrl}/human`, body, {headers: headers})
  }

  /**
   *
   * @param human
   */
  addHumanRecord(human: Human): void {

    this.humanList.push(human);
  }


  deleteRecord( humanId ) {
    const headers = new HttpHeaders(this.headerJson);

    return this.http.delete(`${this.baseUrl}/human/${humanId}`, {headers: headers})
  }
  /**
   *
   * @param cutSceneId
   * @param replicaId
   */
  sliceRecord(humanId):void {

    let humanIndex = this.humanList.findIndex((humanItem) => humanItem.humanId == humanId);
    if ( humanIndex !== undefined ) {
        this.humanList.splice(humanIndex, 1);
    }
  }

}
