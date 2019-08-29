import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any = [];

  constructor( private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesService.getGames().subscribe(
      res => {
        // tslint:disable-next-line: no-string-literal
        this.games = res['games'];
      },
      err => console.error(err)
    );
  }

}
