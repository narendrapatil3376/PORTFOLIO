import {
  Injectable
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  environment
} from '../model/Environment';

import {
  Project
} from '../model/Portfolio.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectServices {

  private readonly baseUrl =
    environment.apiUrl;


  constructor(
    private http: HttpClient
  ) {}


  getProjects(): Observable<Project[]> {

    return this.http.get<Project[]>(
      `${this.baseUrl}/projects`
    );

  }

}