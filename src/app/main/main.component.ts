import { MainService } from './main.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../shared/interfaces/pokemon.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  public list = Array<PokemonList>();
  public items = Array();
  
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly mainService: MainService
  ) { }

  ngOnInit() {
    const result = this.activatedRoute.snapshot.data.value;
    this.items = Array(result.count).fill(0).map((x, i) => (i + 1));
    this.list = result.results;
  }
  
  public clear () {
    this.mainService.getPokemonList().subscribe((list: any) => this.list = list.results);
  }
  
  public onChangePage(pageOfItems: Array<any>) {
    this.mainService.getPokemonList(pageOfItems[0] - 1).subscribe(list => this.list = list.results);
  }
  
  public search (id: number) {
    this.mainService.getPokemonByID(id).subscribe((pokemon: any) => {
      this.list = [
        {
          name: pokemon.name,
          url: `https://pokeapi.co/api/v2/pokemon/${id}/`
        }
      ];
    });
  }
}
