import { Component, OnInit } from '@angular/core';
import { User} from '../../common/User';
import { UserService} from '../../services/UserService';

@Component({
  selector: 'app-users',
  templateUrl: './users.html',
  styleUrls: ['./users.css'] // optional, create if you'd like styles
})
export class Users implements OnInit {
  users: User[] = [];
  errorMessage: string | null = null;
  loading = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.loading = true;
    this.errorMessage = null;

    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        console.log('Users loaded in component:', data);
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Fehler beim Laden der User:', err);
        this.errorMessage = err?.message ?? 'Unbekannter Fehler beim Laden der User.';
        this.loading = false;
      },
    });
  }
}
