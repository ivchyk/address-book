import { Injectable } from '@angular/core';
import {  Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { HumanService } from './human.service';
import { Human } from '../human/human.interface';


@Injectable()
export class AddressDetailResolver implements Resolve<any> {

  constructor (private humanService: HumanService ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {

    let id = route.params['id'];
    return this.humanService.getHumanById(id).then((human: Human) => human);
  }
}
