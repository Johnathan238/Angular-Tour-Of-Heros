import { Injectable } from '@angular/core';
import { Hero } from './interface/hero';
import { HEROES } from './heroes/mock-heroes';
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }

  constructor(private messageService: MessageService) { }
}
