import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdsService {

  constructor() { }

  getRandomIds() {
    const ids = [];

    const arrayLimit = 20;
    const max = 390;
    const min = 1;

    while (ids.length < arrayLimit) {
      const randomNumber = Math.floor(Math.random() * (max - min) + min);
      ids.push(randomNumber);
    }

    return ids;
  }
}
