import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor(private http: HttpClient) { }

  public getDirectory(): Observable<any> {
    return this.http.get('./assets/directory/directory.json');
  }
}
