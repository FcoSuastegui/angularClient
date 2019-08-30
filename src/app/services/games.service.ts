import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Game } from '../models/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private Url = 'http://localhost:3000/api';

  constructor( private http: HttpClient ) { }

  getGames() {
    return this.http.get(`${ this.Url}/games`);
  }

  getGame(id: string|number ) {
    return this.http.get(`${ this.Url}/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${ this.Url}/games/add`, game);
  }

  deleteGame(id: string|number ) {
    return this.http.delete(`${this.Url}/games/delete/${id}`);
  }

  updateGame(id: string|number, updateGame: Game) {
    return this.http.put(`${this.Url}/games/update/${id}`, updateGame);
  }

}
