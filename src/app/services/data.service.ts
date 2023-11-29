import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Subject, catchError, finalize, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  public reposDataSubject = new BehaviorSubject<any[]>([]);
  reposData$ = this.reposDataSubject.asObservable();

  public usernameSubject = new BehaviorSubject<string>('');
  username$ = this.usernameSubject.asObservable();

  public loadingSubject = new Subject<boolean>();
  loading$ = this.loadingSubject.asObservable();

  
  constructor(private apiService: ApiService) {}


  updateLoadingState(isLoading: boolean): void {
    this.loadingSubject.next(isLoading);
  }


  fetchUserData(githubUsername: string): void {
    this.resetState();
    this.updateLoadingState(true);
    this.apiService
      .getUser(githubUsername)
      .pipe(
        mergeMap((userData: any) => {
          this.userDataSubject.next(userData);
          console.log(userData)
          const reposUrl = userData.repos_url;
          return this.apiService.getUserRepos(reposUrl);
        }),
        catchError((error) => {
          console.error('Error fetching user data:', error);
          throw error;
        }),
        finalize(() => {
          this.updateLoadingState(false);
        })
      )
      .subscribe({
        next: (userRepos: any[]) => {
          this.reposDataSubject.next(userRepos);
          console.log('User repositories:', userRepos);
        },
        error: (error) => {
          console.error('Error fetching user data:', error);
        },
      });
  }


  setUsername(username: string): void {
    this.usernameSubject.next(username);
    this.fetchUserData(username);
  }



  private resetState(): void {
    // Reset the user data, repositories, and loading state
    this.userDataSubject.next(null);
    this.reposDataSubject.next([]);
    this.loadingSubject.next(false);
  }
}