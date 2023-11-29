import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserReposComponent } from './user-repos.component';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

const  repoData = [ {
    allow_forking: true,
    archive_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/{archive_format}{/ref}",
    archived: false,
    assignees_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/assignees{/user}",
    blobs_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/git/blobs{/sha}",
    branches_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/branches{/branch}",
    clone_url: "https://github.com/piyushgarg-dev/AFFiNE.git",
    collaborators_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/collaborators{/collaborator}",
    comments_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/comments{/number}",
    commits_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/commits{/sha}",
    compare_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/compare/{base}...{head}",
    contents_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/contents/{+path}",
    contributors_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/contributors",
    created_at: "2023-05-31T17:55:47Z",
    default_branch: "master",
    deployments_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/deployments",
    description: "There can be more than Notion and Miro. AFFiNE is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",
    disabled: false,
    downloads_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/downloads",
    events_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/events",
    fork: true,
    forks: 2,
    forks_count: 2,
    forks_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/forks",
    full_name: "piyushgarg-dev/AFFiNE",
    git_commits_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/git/commits{/sha}",
    git_refs_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/git/refs{/sha}",
    git_tags_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/git/tags{/sha}",
    git_url: "git://github.com/piyushgarg-dev/AFFiNE.git",
    has_discussions: false,
    has_downloads: true,
    has_issues: false,
    has_pages: false,
    has_projects: true,
    has_wiki: true,
    homepage: "https://affine.pro",
    hooks_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/hooks",
    html_url: "https://github.com/piyushgarg-dev/AFFiNE",
    id: 647874446,
    is_template: false,
    issue_comment_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/issues/comments{/number}",
    issue_events_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/issues/events{/number}",
    issues_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/issues{/number}",
    keys_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/keys{/key_id}",
    labels_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/labels{/name}",
    language: null,
    languages_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/languages",
    license: {
      key: 'mpl-2.0',
      name: 'Mozilla Public License 2.0',
      spdx_id: 'MPL-2.0',
      url: 'https://api.github.com/licenses/mpl-2.0',
      node_id: 'MDc6TGljZW5zZTE0'
    },
    merges_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/merges",
    milestones_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/milestones{/number}",
    mirror_url: null,
    name: "AFFiNE",
    node_id: "R_kgDOJp3Hjg",
    notifications_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/notifications{?since,all,participating}",
    open_issues: 0,
    open_issues_count: 0,
    owner: {
      login: 'piyushgarg-dev',
      id: 44976328,
      node_id: 'MDQ6VXNlcjQ0OTc2MzI4',
      avatar_url: 'https://avatars.githubusercontent.com/u/44976328?v=4',
      gravatar_id: '',
      // ... (other properties)
    },
    private: false,
    pulls_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/pulls{/number}",
    pushed_at: "2023-06-08T18:10:46Z",
    releases_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/releases{/id}",
    size: 65567,
    ssh_url: "git@github.com:piyushgarg-dev/AFFiNE.git",
    stargazers_count: 0,
    stargazers_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/stargazers",
    statuses_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/statuses/{sha}",
    subscribers_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/subscribers",
    subscription_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/subscription",
    svn_url: "https://github.com/piyushgarg-dev/AFFiNE",
    tags_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/tags",
    teams_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/teams",
    topics: [],
    trees_url: "https://api.github.com/repos/piyushgarg-dev/AFFiNE/git/trees{/sha}",
    updated_at: "2023-10-31T13:24:34Z",
    url: "https://api.github.com/repos/pi"
  },
]
describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;
  let dataServiceMock: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    dataServiceMock = jasmine.createSpyObj('DataService', ['loading$'], {
      reposData$: of(repoData), // Provide a custom getter with a default value
    });

    TestBed.configureTestingModule({
      declarations: [UserReposComponent],
      providers: [{ provide: DataService, useValue: dataServiceMock }],
    });

    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  
  it('should update page number on pageChanged', () => {
    // Arrange
    const newPageNumber = 2;

    // Act
    component.pageChanged(newPageNumber);

    // Assert
    expect(component.currentPageNumber).toEqual(newPageNumber);
  });

  // Add more test cases for different scenarios and edge cases

  // Don't forget to test ngOnDestroy if you implement any logic in it
});