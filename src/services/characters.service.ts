import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CharacterInfo, Character } from '../models/character.model';
import { CharacterAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

private mainUrl = 'https://rickandmortyapi.com/api/';
private characterUrl = this.mainUrl + 'character';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http
      .get<CharacterInfo>(this.characterUrl)
      .pipe(map((result: CharacterInfo) => CharacterAdapter(result)))
  }

  getCharacterInformation( url: string): Observable<Character> {
    return this.http.get<Character>(url)
  }
}
