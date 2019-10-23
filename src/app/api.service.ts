import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  configUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  getCards(ids: string[]) {
    const url = `${this.configUrl}${ids.join(',')}`;
    return this.http.get(url);
  }
}
