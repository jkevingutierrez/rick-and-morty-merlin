import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { IdsService } from './ids.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  elements$: Observable<any>;
  elements: [];

  constructor(public apiService: ApiService, public idsService: IdsService) { }

  ngOnInit() {
    this.getAllCards();
  }

  getAllCards() {
    const ids = this.idsService.getRandomIds();

    this.elements$ = this.apiService.getCards(ids);

    this.elements$.subscribe((elements) => {
      this.elements = elements.sort((a: any, b: any) => {
        const latestEpisodeA = a.episode[a.episode.length - 1];
        const latestEpisodeB = b.episode[b.episode.length - 1];

        const arrayA = latestEpisodeA.split('/');
        const arrayB = latestEpisodeB.split('/');

        const latestEpisodeANumber = Number(arrayA[arrayA.length - 1]);
        const latestEpisodeBNumber = Number(arrayB[arrayB.length - 1]);

        return latestEpisodeANumber > latestEpisodeBNumber ? -1 : 1;
      });
    });
  }
}
