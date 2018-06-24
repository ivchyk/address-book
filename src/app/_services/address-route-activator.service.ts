import { ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import { Injectable } from "@angular/core";
import { HumanService } from './human.service';

@Injectable()
export class AddressRouteActivator implements CanActivate {

  constructor (private humanService: HumanService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {

    let dataExists = false;

    return this.humanService.getHumanById(+route.params['id'])
      .then((human) => {
        dataExists = !!human;
        if (!dataExists) {
          this.router.navigate(['/404']);
        }
        return dataExists;
      });
  }
}
