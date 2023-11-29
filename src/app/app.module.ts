import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SkeletonLoadingComponent } from './components/skeleton-loading/skeleton-loading.component';
import { UserBioComponent } from './components/user-bio/user-bio.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    UserBioComponent,
    UserReposComponent,
    SkeletonLoadingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
