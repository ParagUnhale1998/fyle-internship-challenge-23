import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserBioComponent } from './user-bio.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

const mockUserData = {
  avatar_url: 'https://avatars.githubusercontent.com/u/44976328?v=4',
  bio: null,
  blog: 'https://piyushgarg.dev',
  company: null,
  created_at: '2018-11-12T15:28:41Z',
  email: null,
  events_url: 'https://api.github.com/users/piyushgarg-dev/events{/privacy}',
  followers: 1393,
  followers_url: 'https://api.github.com/users/piyushgarg-dev/followers',
  following: 18,
  following_url: 'https://api.github.com/users/piyushgarg-dev/following{/other_user}',
  gists_url: 'https://api.github.com/users/piyushgarg-dev/gists{/gist_id}',
  gravatar_id: '',
  hireable: true,
  html_url: 'https://github.com/piyushgarg-dev',
  id: 44976328,
  location: 'India',
  login: 'piyushgarg-dev',
  name: 'Piyush Garg',
  node_id: 'MDQ6VXNlcjQ0OTc2MzI4',
  organizations_url: 'https://api.github.com/users/piyushgarg-dev/orgs',
  public_gists: 47,
  public_repos: 131,
  received_events_url: 'https://api.github.com/users/piyushgarg-dev/received_events',
  repos_url: 'https://api.github.com/users/piyushgarg-dev/repos',
  site_admin: false,
  starred_url: 'https://api.github.com/users/piyushgarg-dev/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/piyushgarg-dev/subscriptions',
  twitter_username: 'piyushgarg_dev',
  type: 'User',
  updated_at: '2023-11-22T12:46:29Z',
  url: 'https://api.github.com/users/piyushgarg-dev',
};

describe('UserBioComponent', () => {
  let component: UserBioComponent;
  let fixture: ComponentFixture<UserBioComponent>;
  let dataServiceMock: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    dataServiceMock = jasmine.createSpyObj('DataService', ['userData$', 'loading$'], {
      userData$: of(mockUserData), // Provide a default value
      loading$: of(true), // Provide a default value
    });

    TestBed.configureTestingModule({
      declarations: [UserBioComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    });

    fixture = TestBed.createComponent(UserBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Check user data when available', () => {
    dataServiceMock.userData$ = of(mockUserData);

    // Act
    fixture.detectChanges();

    // Assert
    component.userData$.subscribe((userData) => {
      expect(userData).toEqual(mockUserData);
    });
  });

});