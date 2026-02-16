import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  private baseUrl = 'http://localhost:8080/api/games';

  constructor(private http: HttpClient) {}

  search(name: string): Observable<any[]> {
    const url = `${this.baseUrl}/search`;
    return this.http.get<any[]>(`${url}?name=${name}`);

  }

}
