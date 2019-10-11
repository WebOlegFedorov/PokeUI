import { Component, Input, OnInit } from '@angular/core';
import { PokemonList } from '../../shared/interfaces/pokemon.interface';
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  @Input() list = Array<PokemonList>();
  public displayedColumns = ['name'];

  constructor(
    private readonly route: Router
  ) { }

  ngOnInit() {

  }
  
  public redirectTo (pokemon: PokemonList) {
    const parseUrl = pokemon.url.split('/');
    this.route.navigate([`pokemon/${parseUrl[parseUrl.length - 1]}`])
  }

}
