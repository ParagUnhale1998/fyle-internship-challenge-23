# Fyle Frontend Challenge - Completed by Parag Unhale

## Overview

This repository contains the completed Fyle Frontend Challenge. The goal of the challenge was to implement an application using the GitHub API, with a focus on handling topics, server-side pagination, and incorporating a skeleton loader during API calls. The assignment also required the inclusion of unit tests for one component and one service, achieving 100% code coverage.

## Key Features

1. **Topics Representation:**
   - The provided image illustrates the representation of topics for a particular repository. Each repository can have multiple topics.

   ![Topics Representation](https://github.com/ParagUnhale1998/fyle-internship-challenge-23/blob/master/src/assets/Thumbnail2.png)

2. **Server-side Pagination:**
   - Pagination is implemented on the server side.
   - By default, 10 repositories are displayed per page.
   - Users have the flexibility to choose a maximum of 100 repositories per page.

3. **Skeleton Loader:**
   - A skeleton loader is displayed during API calls to enhance the user experience and provide visual feedback on data loading.
   - 
## Hosted Version

Access the hosted version of the application [here](https://github-challenge-parag-unhale.netlify.app/).

## Technologies Used

- Angular Framework
- Server-side Pagination Module
- Skeleton Loader for Angular

## How to Run

1. Clone this repository to your local machine.
2. Install the required dependencies by running `npm install`.
3. Run the development server using `ng serve`.
4. Navigate to http://localhost:4200/ to view the application.

## Unit Tests

### DataService

- `should handle error when fetching user data`
- `should reset state`
- `should set username and fetch user data`
- `should fetch user data successfully`
- `should be created`

### ApiService

- `should be created`
- `should get user repos`
- `should get user data`

### NavbarComponent

- `should unsubscribe onDestroy`
- `should create the component`
- `should set username and update user data on successful fetch`
- `should initialize with default values`
- `should call onSearch method on ngOnInit`

### UserBioComponent

- `should Check user data when available`
- `should create`

### UserReposComponent

- `should create the component`
- `should update page number on pageChanged`


## Testing

Run the following commands to execute unit tests:

```bash
ng test --include='**/data.service.spec.ts'
ng test --include='**/api.service.spec.ts'
ng test --include='**/navbar.component.spec.ts'
ng test --include='**/user-bio.component.spec.ts'
ng test --include='**/user-repos.component.spec.ts'
