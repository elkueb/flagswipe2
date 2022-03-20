import {Component, OnInit} from "@angular/core";
import {GameService} from "../../service/game/game.service";

@Component({
  selector: 'app-swipe',
  templateUrl: './swipegame.component.html',
  styleUrls: ['./swipegame.component.less'],
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)'
  }
})
export class SwipegameComponent implements OnInit {

  currentCard: SwipeCard;

  constructor(private gameService: GameService) {
    this.currentCard = {} as SwipeCard
  }

  ngOnInit(): void {
    this.newCard()
  }

  left(): void {
    this.newCard()
  }

  right(): void {
    this.newCard()
  }

  private newCard(): void {
    this.gameService.question().subscribe(newCard => this.currentCard = newCard)
  }

  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key == 'ArrowLeft') {
      this.left()
    }
    if (event.key == 'ArrowRight')
      this.right()
  }
}
