import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/games';
import { GamesService } from '../../services/games.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit = false;

  constructor( private gamesService: GamesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if ( params.id  ) {
        this.gamesService.getGame(params.id).subscribe(
          (res: any ) => {
            // tslint:disable-next-line: align
            this.game = res.game;
            this.edit = true;
          },
          err => console.error(err)
        );
    }
  }

  saveNewGame() {
    delete this.game.id;
    delete this.game.created_at;

    this.gamesService.saveGame(this.game).subscribe(
      res => {
          this.router.navigate(['/games']);
      },
      err => console.error(err)
    );

  }


  updateGame() {
    delete this.game.created_at;
    this.gamesService.updateGame(this.game.id, this.game).subscribe(
      res => {
          this.router.navigate(['/games']);
      },
      err => console.error(err)
    );
  }

}
