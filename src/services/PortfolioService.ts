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
  Profile,
  HeroStat,
  SkillCategory
} from '../model/Portfolio.model';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private readonly baseUrl =
    environment.apiUrl;


  constructor(
    private http: HttpClient
  ) {}


  getProfile(): Observable<Profile> {

    return this.http.get<Profile>(
      `${this.baseUrl}/profile`
    );

  }


  getHeroStats(): Observable<HeroStat[]> {

    return this.http.get<HeroStat[]>(
      `${this.baseUrl}/hero-stats`
    );

  }


  getSkills(): Observable<SkillCategory[]> {

    return this.http.get<SkillCategory[]>(
      `${this.baseUrl}/skills`
    );

  }

}