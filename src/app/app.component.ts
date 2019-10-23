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
        const latestEpisodeUrlA = a.episode[a.episode.length - 1];
        const latestEpisodeUrlB = b.episode[b.episode.length - 1];

        const episodeUrlArrayA = latestEpisodeUrlA.split('/');
        const episodeUrlArrayB = latestEpisodeUrlB.split('/');

        const latestEpisodeANumber = Number(episodeUrlArrayA[episodeUrlArrayA.length - 1]);
        const latestEpisodeBNumber = Number(episodeUrlArrayB[episodeUrlArrayB.length - 1]);

        return latestEpisodeANumber > latestEpisodeBNumber ? -1 : 1;
      });
    });
  }
}
