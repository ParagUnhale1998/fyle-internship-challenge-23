import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get user data', () => {
    const dummyUserData = { login: 'testUser', id: 1 };

    service.getUser('testUser').subscribe((data) => {
      expect(data).toEqual(dummyUserData);
    });

    const req = httpMock.expectOne('https://api.github.com/users/testUser');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserData);
  });

  it('should get user repos', () => {
    const dummyReposData = [{ name: 'repo1' }, { name: 'repo2' }];

    service.getUserRepos('https://api.github.com/user/repos').subscribe((data) => {
      expect(data).toEqual(dummyReposData);
    });

    const req = httpMock.expectOne('https://api.github.com/user/repos');
    expect(req.request.method).toBe('GET');
    req.flush(dummyReposData);
  });
});
