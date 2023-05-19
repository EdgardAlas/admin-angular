import { Component, OnInit, inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { IAnime } from "src/app/modules/anime/interface/anime";
import { AnimeService } from "src/app/modules/anime/service/anime.service";

@Component({
  selector: "app-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.scss"],
})
export class ListarComponent implements OnInit {
  breadcrums = [{ label: "Anime" }, { label: "Listar", active: true }];
  cards: IAnime[] = [];
  offset = 0;
  constructor(private animeService: AnimeService) {}
  a: string | null = null;

  cardText = new FormControl("");

  ngOnInit(): void {
    this.buscarCards();
    this.inputoReactivo();
  }

  inputoReactivo() {
    this.cardText.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.cards = [];
      this.buscarCardsForma2(value);
    });

    if (!this.cardText.touched) {
      this.cards = [];
      this.buscarCardsForma2(null);
    }
  }

  // onScroll(paraBuscar: string | null) {
  // this.offset += 50;
  /* this.buscarCards(); */
  // console.log(this.a, this.offset);
  // this.animeService.busquedas(this.a, this.offset);
  // }

  onScroll() {
    this.offset += 50;
    this.buscarCards();
  }

  buscarCards() {
    this.animeService.getCarsAnime(this.offset).subscribe((cards) => {
      this.cards = [...this.cards, ...cards];
    });
  }

  buscarCardsForma2(nombreCard: string | null) {
    this.animeService.getCardsAnimeForma2(nombreCard).subscribe((cards) => {
      this.cards = [...this.cards, ...cards];
    });
  }

  get resultados() {
    return this.animeService.cards;
  }
}
