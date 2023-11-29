import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent,ProfileComponent],
    
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  
});
