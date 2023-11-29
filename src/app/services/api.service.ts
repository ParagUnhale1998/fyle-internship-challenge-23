import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.github.com';

  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getUserRepos(userReposLink: string): Observable<any[]> {
    const reposUrl = userReposLink;
    return this.httpClient.get<any[]>(reposUrl);
  }
}
