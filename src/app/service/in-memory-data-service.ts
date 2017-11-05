import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const people = [
      { id: 1, name: 'Ned' },
      { id: 2, name: 'Arya' },
      { id: 3, name: 'Cersei' },
      { id: 4, name: 'Bran' },
      { id: 5, name: 'Jon' },
      { id: 6, name: 'Jamie' },
      { id: 7, name: 'Loras' },
      { id: 8, name: 'Robert' },
      { id: 9, name: 'Brienne' },
      { id: 10, name: 'Daenerys' },
      { id: 11, name: 'Tyrion' },
      { id: 12, name: 'Sam' },
      { id: 13, name: 'Sansa' },
      { id: 14, name: 'Oberyn' },
      { id: 15, name: 'Tywin' },
      { id: 16, name: 'Margaery' },
    ];
    return {people};
  }
}
