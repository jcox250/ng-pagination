import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PeopleService {

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<any[]> {
    return this.http.get('api/people');
  }

}
