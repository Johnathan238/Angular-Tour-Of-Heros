import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from './mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero
  heros: Hero[] = []


  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
    console.log(this.heros);
  }

  getHeroes(){
      this.heroService.getHeroes()
      .subscribe(heroes => this.heros = heroes);
  }

  onSelect(hero: Hero){
    this.selectedHero = hero
    console.log(this.selectedHero);
  }

}
