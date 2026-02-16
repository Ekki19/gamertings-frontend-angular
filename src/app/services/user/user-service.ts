import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User} from '../../common/User';

@Injectable({
  providedIn: 'root' })
export class UserService {
  private baseUrl = 'http://localhost:8080/api'; // Backend base URL

  constructor(private http: HttpClient) {}

  /**
   * Fetch all users from the backend.
   */
  getUsers(): Observable<User[]> {
    const url = `${this.baseUrl}/users`;
    return this.http.get<User[]>(url).pipe(
      tap((data) => {
        // Optional: helpful for debugging, similar to console.log in your original code
        console.log('UserService.getUsers response:', data);
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Centralized error handling for HTTP requests.
   */
  private handleError(error: HttpErrorResponse) {
    // Client-side or network error
    if (error.error instanceof ErrorEvent) {
      console.error('A client-side or network error occurred:', error.error.message);
    } else {
      // Backend returned an unsuccessful response code.
      console.error(
        `Backend returned code ${error.status}, ` + `body was:`,
        error.error
      );
    }
    // Return an observable with a user-facing error message
    return throwError(() => new Error('Failed to load users. Please try again later.'));
  }
}
