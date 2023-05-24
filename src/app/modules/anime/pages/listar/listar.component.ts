import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IAnime } from '../../interface/anime';
import { AnimeService } from '../../service/anime.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  cards: IAnime[] = [];
  offset = 0;
  // a!: string | null;
  cardText = new FormControl();
  constructor(private animeService: AnimeService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Anime' }, { label: 'Listar', active: true }];

    this.cards = [];
    // this.buscarCards();
    this.inputReactivo();
  }

  inputReactivo() {
    this.cardText.valueChanges
      .pipe(debounceTime(1500)
      ).subscribe((res) => {
        this.cards = [];
        this.buscarCardsForma2(res);
      });

      if (!this.cardText.touched) {
        this.cards = [];
        this.buscarCardsForma2();
      }

  }

  // onScroll(paraBuscar: string | null) {
  //   console.log('scroll infinito')
  //   this.offset += 50;
  //   // this.buscarCards();
  //   // this.buscarCardsForma2();
  //   this.animeService.busquedas(this.a, this.offset);

  // }


  onScroll(){
    this.offset += 50;
    this.buscarCardsForma2();
  }

  get resultados() {
    return this.animeService.cards;
  }


  // buscarCards() {
  //   this.animeService.getCardsAnime(this.offset).subscribe((res) => {
  //     console.log(res);
  //     this.cards = [...this.cards, ...res];
  //   })
  // }

  buscarCardsForma2(nombreCard: string | null = null) {
    this.animeService.getCardsAnimeForma2(nombreCard, this.offset).subscribe((res) => {
      console.log(res)
      this.cards = [...this.cards, ...res];

    })
  }


}
