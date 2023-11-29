import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { DataService } from 'src/app/services/data.service';
import { of, throwError } from 'rxjs';

const userData = {
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


describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let dataServiceMock: jasmine.SpyObj<DataService>;
  beforeEach(() => {
    dataServiceMock = jasmine.createSpyObj('DataService', ['setUsername', 'fetchUserData']);
    
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    });
    
    // spyOn(dataServiceMock, 'fetchUserData').and.returnValue(of(userData) as any); // Replace 'userData' with your test data
    
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;

  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.searchedUsername).toEqual('');
    expect(component.userdata).toBeUndefined();
    expect(component.isLoading).toBe(true);
  });

  it('should call onSearch method on ngOnInit', () => {
    // Arrange
    const searchedUsername = 'piyushgarg-dev';
    component.searchedUsername = searchedUsername;
    
    // Set up the userData$ observable in the mock
    dataServiceMock.userData$ = of(userData);
  
    // Act
    component.onSearch();
  
    // Assert
    expect(dataServiceMock.setUsername).toHaveBeenCalledWith(searchedUsername);
    expect(component.isLoading).toBe(false);
    expect(component.userdata).toEqual(userData);
  });

  it('should set username and update user data on successful fetch', () => {
    // Arrange
   

    // Mock the data service to return an observable with the mock user data
    dataServiceMock.userData$ = of(userData);

    // Act
    component.onSearch();

    // Assert
    expect(dataServiceMock.setUsername).toHaveBeenCalledWith(component.searchedUsername);
    expect(component.isLoading).toBe(false);
    expect(component.userdata).toEqual(userData);
  });

;

  it('should unsubscribe onDestroy', () => {
    // Arrange
    const component: any = fixture.componentInstance;
    spyOn(component.getDestroy$(), 'next');
    spyOn(component.getDestroy$(), 'complete');
  
    // Act
    component.ngOnDestroy();
  
    // Assert
    expect(component.getDestroy$().next).toHaveBeenCalledOnceWith();
    expect(component.getDestroy$().complete).toHaveBeenCalledOnceWith();
  });

  // Add more tests for different scenarios and edge cases
});