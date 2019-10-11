import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MainService } from '../main/main.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SingleResolver implements Resolve<any> {
  
  constructor (
    private readonly mainService: MainService
  ) { }
  
  resolve (route: ActivatedRouteSnapshot) {
    return this.mainService.getPokemonByID(route.params.id);
  }
}
