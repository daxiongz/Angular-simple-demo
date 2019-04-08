import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
	providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const heroes = [
			{ id: 11, name: '李白' },
			{ id: 12, name: '程咬金' },
			{ id: 13, name: '甄姬' },
			{ id: 14, name: '妲己' },
			{ id: 15, name: '马可波罗' },
			{ id: 16, name: '宫本武藏' },
			{ id: 17, name: '狄仁杰' },
			{ id: 18, name: '李元芳' },
			{ id: 19, name: '兰陵王' },
      { id: 20, name: '鲁班' },
       { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
	}

	genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
