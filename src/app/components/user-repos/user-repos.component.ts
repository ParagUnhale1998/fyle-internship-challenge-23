import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.scss'],
})
export class UserReposComponent {
  
  reposData$ = this.dataService.reposData$;
  currentPageNumber: number = 1;
  pageSize: number = 10;
  perPageOptions = [10, 20, 50, 100];
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loading$.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });
  }

  pageChanged(event: number): void {
    this.currentPageNumber = event;
  }
  
}

