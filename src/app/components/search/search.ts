import { Component } from '@angular/core';
import { GameService} from '../../services/game/game-service';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.html',
  styleUrl: './search.css',
  imports: [
    FormsModule,
    Button,
    NgOptimizedImage
  ]
})
export class Search {
  searchTerm: string = '';
  games: any[] = [];

  constructor(private gameService: GameService) {}

  onSearch() {
    this.gameService.search(this.searchTerm).subscribe(data => {
      this.games = data;
    })
  }

}
