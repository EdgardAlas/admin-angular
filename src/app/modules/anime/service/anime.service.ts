import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { map } from "rxjs/operators";
import { IAnime, ResponseAnime } from "src/app/modules/anime/interface/anime";

@Injectable({
  providedIn: "root",
})
export class AnimeService {
  http = inject(HttpClient);
  cards: IAnime[] = [];
  url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

  constructor() {}

  getCarsAnime(offset = 0) {
    return this.http
      .get<ResponseAnime>(this.url, {
        params: {
          offset,
          num: 50,
        },
      })
      .pipe(map((res) => res.data));
  }

  getCardsAnimeForma2(nombreCard: string | null, offset = 0) {
    console.log(nombreCard);
    return this.http
      .get<ResponseAnime>(this.url, {
        params: {
          offset,
          num: 50,
          fname: nombreCard || "",
        },
      })
      .pipe(map((res) => res.data));
  }

  busquedas(nombreCard: string | null, offset = 0) {
    console.log(nombreCard);
    if (nombreCard) {
      this.getCardsAnimeForma2(nombreCard, offset).subscribe((cards) => {
        console.log(cards);
        this.cards = [...this.cards, ...cards];
      });
    } else {
      this.getCarsAnime(offset).subscribe((cards) => {
        this.cards = [...this.cards, ...cards];
      });
    }
  }
}
