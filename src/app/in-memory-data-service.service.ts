import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const heroes = [
      { id: 11, name: 'Dr Nice', power: 'Being nice' },
      { id: 12, name: 'Narco', power: 'Ccccocaine' },
      { id: 13, name: 'Bombasto', power: 'Blows everything' },
      { id: 14, name: 'Celeritas', power: 'Eats celery' },
      { id: 15, name: 'Magneta', power: 'Plays with magnets' },
      { id: 16, name: 'RubberMan', power: 'Uses protection ;)' },
      { id: 17, name: 'Dynama', power: 'Pyromaniac' },
      { id: 18, name: 'Dr IQ', power: 'Smarty-pants' },
      { id: 19, name: 'Magma', power: 'Hot hot hot' },
      { id: 20, name: 'Tornado', power: 'Takes away your house, car, money...' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
