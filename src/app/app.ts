import {Component, NgModule, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import {Users} from './components/users/users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Users],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('gamertings-frontend-angular');





}
