import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../shared/interfaces/pokemon.interface';
import { MainService } from "../main/main.service";

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  
  private id: number;
  public wait = false;
  public data: Pokemon;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly mainService: MainService,
    private readonly route: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.id = +params.id);
    this.data = this.activatedRoute.snapshot.data.value;
  }
  
  public updateInfo (id: number) {
    this.wait = true;
    this.mainService.getPokemonByID(id).subscribe((pokemon: Pokemon) => {
      this.data = pokemon;
      this.wait = false;
    });
  }
  
  public changePokemon (next: boolean) {
    const id = next ? this.id + 1 : this.id - 1;
    this.route.navigate([`pokemon/${id}`]);
    this.updateInfo(id);
  }

}
