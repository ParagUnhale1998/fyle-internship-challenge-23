import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-bio',
  templateUrl: './user-bio.component.html',
  styleUrls: ['./user-bio.component.scss'],
})
export class UserBioComponent implements OnInit {
  userData$ = this.dataService.userData$;
  isLoading: boolean = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.loading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
  }
}

