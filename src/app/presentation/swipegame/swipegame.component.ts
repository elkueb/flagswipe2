import {Component, OnInit} from "@angular/core";
import {GameService} from "../../service/game/game.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-swipe',
  templateUrl: './swipegame.component.html',
  styleUrls: ['./swipegame.component.less']
})
export class SwipegameComponent implements OnInit {

  currentCard: SwipeCard;

  constructor(private gameService: GameService) {
    this.currentCard = {} as SwipeCard
  }

  ngOnInit(): void {
    this.gameService.question().subscribe(newCard => this.currentCard = newCard)
  }

}
