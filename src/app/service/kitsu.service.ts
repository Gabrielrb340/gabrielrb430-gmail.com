
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Heroes, HeroData } from '../interfaces/heroes';
import { MediaCharacters } from '../interfaces/mediacharacters';

@Injectable({
  providedIn: 'root'
})
export class KitsuService {

  url = 'https://kitsu.io/api/edge/'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json' })
  }
  //https://kitsu.io/api/edge/characters
  getHeroes(path:string): Observable<Heroes> {
    return this.httpClient.get<Heroes>(this.url + '/' + path)
      .pipe(
        retry(2)
        )
  }

  //https://kitsu.io/api/edge/characters/id
  getHeroeById(path:string): Observable<HeroData> {
    return this.httpClient.get<HeroData>(this.url + '/' + path)
      .pipe(
        retry(2)
      )
  }
  getMediaCharactersbyUrl(url:string):Observable<MediaCharacters> {
    return this.httpClient.get<MediaCharacters>(url)
    .pipe(
      retry(2)
    )
  }
}
