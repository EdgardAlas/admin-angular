import { Component, Input, OnInit } from "@angular/core";
import { Color, Label, MultiDataSet } from "ng2-charts";

@Component({
  selector: "app-grafica-a",
  templateUrl: "./grafica-a.component.html",
  styleUrls: ["./grafica-a.component.scss"],
})
export class GraficaAComponent implements OnInit {
  @Input() title = "Sin titulo";
  @Input("labels") donaLabels: Label[] = ["label1", "label2"];
  @Input("data") donaData: MultiDataSet = [[350, 450]];
  @Input("colors") donaColors: Color[] = [
    { backgroundColor: ["#6857E6", "#F02059"] },
  ];

  constructor() {}

  ngOnInit(): void {}
}
