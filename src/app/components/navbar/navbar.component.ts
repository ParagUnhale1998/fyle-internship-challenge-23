import { Component } from '@angular/core';
import { EMPTY, Subject, catchError, takeUntil } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchedUsername: string = '';
  userdata: any;
  isLoading: boolean = true;

  protected destroy$ = new Subject<void>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.searchedUsername = 'paragunhale1998';
    this.onSearch();
  }
  onSearch(): void {
    this.dataService.setUsername(this.searchedUsername);

    this.dataService.userData$
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          console.error(error);
          this.isLoading = false;
          return EMPTY; // or any default value/error handling as needed
        })
      )
      .subscribe({
        next: (data) => {
          this.isLoading = false;
          this.userdata = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  getDestroy$(): Subject<void> {
    return this.destroy$;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
