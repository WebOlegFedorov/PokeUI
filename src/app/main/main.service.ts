import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { Pokemon } from '../shared/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private readonly http: HttpClient,
  ) { }
  
  public getPokemonList (offset: number = 0, limit: number = 10): Observable<any> {
    let params = new HttpParams();
    params = params.append('limit', limit.toString());
    params = params.append('offset', offset.toString());
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/`, { params });
  }
  
  public getPokemonByID (id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }
}
