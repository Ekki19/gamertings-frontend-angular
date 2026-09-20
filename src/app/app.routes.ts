import { Routes } from '@angular/router';
import { Users } from './components/users/users';
import { Game } from './components/game/game';

export const routes: Routes = [
  {path: 'users', component: Users},
  {path: 'game/:id', component: Game}
];
