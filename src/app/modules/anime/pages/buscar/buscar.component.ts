import { Component, EventEmitter, OnInit, Output, inject } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { AnimeService } from "src/app/modules/anime/service/anime.service";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styleUrls: ["./buscar.component.scss"],
})
export class BuscarComponent implements OnInit {
  @Output() buscar = new EventEmitter<string | null>();
  cardText = new FormControl("");

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.inputoReactivo();
  }

  inputoReactivo() {
    this.cardText.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.buscar.emit(value);
    });
    this.buscar.emit();
  }
}
