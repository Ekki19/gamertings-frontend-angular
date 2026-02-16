import {Component, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Search} from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('gamertings-frontend-angular');





}
