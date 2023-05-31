import { Component, OnInit } from "@angular/core";
import { IAnime } from "../../interface/anime";
import { AnimeService } from "../../service/anime.service";
import { Color, MultiDataSet } from "ng2-charts";

@Component({
  selector: "app-mostrar",
  templateUrl: "./mostrar.component.html",
  styleUrls: ["./mostrar.component.scss"],
})
export class MostrarComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  cards: IAnime[] = [];
  offset = 0;
  term: string = "";

  // grafica a

  labels: string[] = [];
  dataGrafica: MultiDataSet = [];
  colors: Color[] = [
    {
      backgroundColor: ["#6857E6", "#142329"],
    },
  ];

  // grafica b

  xaxis: { categories: string[] } = { categories: [] };
  series: [{ data: number[] }] = [{ data: [] }];
  colors2: string[] = ["#34c38f"];

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Anime" },
      { label: "Mostrar", active: true },
    ];
    this.getCards();
  }

  getCards(nombreCard: string | null = null) {
    this.animeService
      .getCardsAnimeForma2(nombreCard, this.offset)
      .subscribe((res) => {
        this.cards = [...this.cards, ...res];
        this.graficar();
      });
  }

  graficar() {
    //GRAFICA A
    // agrupar por tipo
    const grupos = this.cards.reduce((acc, card) => {
      const llave = card.type;
      if (acc[llave]) {
        acc[llave].push(card);
      } else {
        acc[llave] = [card];
      }
      return acc;
    }, {});

    // store labels

    for (const key in grupos) {
      this.labels.push(key);
      this.dataGrafica.push([grupos[key].length]);
    }

    this.colors[0].backgroundColor = this.randomColors(this.labels.length);

    // GRFICA B

    for (const key in grupos) {
      this.xaxis.categories.push(key);
      this.series[0].data.push(grupos[key].length);
    }

    this.colors2 = this.randomColors(1);

    console.log(this.xaxis);
    console.log(this.series);
    console.log(this.colors2);
  }

  randomColors(numberOfColors: number) {
    const colors = [];
    while (colors.length < numberOfColors) {
      const color = this.hex();
      if (!colors.includes(color)) {
        colors.push(color);
      }
    }
    return colors;
  }

  hex() {
    return `#${Math.floor(Math.random() * 16_777_215).toString(16)}`;
  }
}
