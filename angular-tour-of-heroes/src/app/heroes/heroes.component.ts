import { Component, OnInit } from '@angular/core';
import { Hero } from '../interface/hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero
  heros = HEROES


  constructor() { }

  ngOnInit(): void {
    console.log(this.heros);
  }

  onSelect(hero: Hero){
    this.selectedHero = hero
    console.log(this.selectedHero);

  }

}
