import {Component, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('gamertings-frontend-angular');





}
