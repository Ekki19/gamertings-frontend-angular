import {Component, signal} from '@angular/core';
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
  games = signal<any[]>([]);

  gameTypeMap: { [key: number]: string } = {
    0: 'Hauptspiel',
    1: 'DLC / Add-on',
    2: 'Erweiterung',
    3: 'Bundle',
    4: 'Standalone',
    5: 'Mod',
    8: 'Remake',
    9: 'Remaster',
    10: 'Expanded Game',
    11: 'Port',
    12: 'Fork',
    13: 'Pack',
    14: 'Update'
  }

  constructor(private gameService: GameService) {}

  onSearch() {
    this.gameService.search(this.searchTerm).subscribe(data => {
      if(Array.isArray((data))){
        const sorted = data.sort((a, b) => (b.total_rating_count || 0) - (a.total_rating_count || 0));
        this.games.set(sorted);
      }else{
        console.error('Erhaltene Daten sind kein Array:', data);
        this.games.set([]); // Signal auf leer setzen, um Absturz zu vermeiden
      }
    })
  }
}
