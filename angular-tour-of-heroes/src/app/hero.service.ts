import { Injectable } from '@angular/core';
import { Hero } from './interface/hero';
import { HEROES } from './heroes/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    return heroes
  }

  constructor() { }
}
