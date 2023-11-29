import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { DataService } from './data.service';
import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['getUser', 'getUserRepos']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        
        DataService,
        { provide: ApiService, useValue: spy }
      ]
    });

    service = TestBed.inject(DataService);
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data successfully', fakeAsync(() => {
    // Arrange
    const dummyUserData = { login: 'testUser', id: 1 ,  repos_url: 'https://api.github.com/users/piyushgarg-dev/repos',
  };
    const dummyReposData = [{ name: 'repo1' }, { name: 'repo2' }];

    apiServiceSpy.getUser.and.returnValue(of(dummyUserData));
    apiServiceSpy.getUserRepos.and.returnValue(of(dummyReposData));

    // Act
    service.fetchUserData('testUser');
    tick();

    // Assert
    service.userData$.subscribe(userData => {
      expect(userData).toEqual(dummyUserData);
    });

    service.reposData$.subscribe(reposData => {
      expect(reposData).toEqual(dummyReposData);
    });

    expect(apiServiceSpy.getUser).toHaveBeenCalledWith('testUser');
    expect(apiServiceSpy.getUserRepos).toHaveBeenCalledWith(dummyUserData.repos_url);
  }));

  it('should handle error when fetching user data', fakeAsync(() => {
    // Arrange
    const error = 'Test error';
    apiServiceSpy.getUser.and.returnValue(throwError(error));

    // Act
    service.fetchUserData('testUser');
    tick();

    // Assert
    service.userData$.subscribe(userData => {
      expect(userData).toBeNull();
    });

    service.reposData$.subscribe(reposData => {
      expect(reposData).toEqual([]);
    });

    expect(apiServiceSpy.getUser).toHaveBeenCalledWith('testUser');
    expect(apiServiceSpy.getUserRepos).not.toHaveBeenCalled();
  }));

  it('should set username and fetch user data', fakeAsync(() => {
    // Arrange
    const dummyUserData = { login: 'testUser', id: 1 ,  repos_url: 'https://api.github.com/users/piyushgarg-dev/repos',
  };
    const dummyReposData = [{ name: 'repo1' }, { name: 'repo2' }];


    apiServiceSpy.getUser.and.returnValue(of(dummyUserData));
    apiServiceSpy.getUserRepos.and.returnValue(of(dummyReposData));

    // Act
    service.setUsername('testUser');
    tick();

    // Assert
    service.userData$.subscribe(userData => {
      expect(userData).toEqual(dummyUserData);
    });

    service.reposData$.subscribe(reposData => {
      expect(reposData).toEqual(dummyReposData);
    });

    expect(apiServiceSpy.getUser).toHaveBeenCalledWith('testUser');
    expect(apiServiceSpy.getUserRepos).toHaveBeenCalledWith(dummyUserData.repos_url);
  }));

  it('should reset state', () => {
    // Arrange
    service.userDataSubject.next({ login: 'testUser', id: 1 });
    service.reposDataSubject.next([{ name: 'repo1' }, { name: 'repo2' }]);
    service.loadingSubject.next(true);

    // Act
    service['resetState']();

    // Assert
    service.userData$.subscribe(userData => {
      expect(userData).toBeNull();
    });

    service.reposData$.subscribe(reposData => {
      expect(reposData).toEqual([]);
    });

    service.loading$.subscribe(loading => {
      expect(loading).toBe(false);
    });
  });
});
