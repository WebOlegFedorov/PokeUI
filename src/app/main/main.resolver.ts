import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MainService } from './main.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MainResolver implements Resolve<any> {
  
  constructor (
    private readonly mainService: MainService
  ) { }
  
  resolve (route: ActivatedRouteSnapshot) {
    return this.mainService.getPokemonList();
  }
}
