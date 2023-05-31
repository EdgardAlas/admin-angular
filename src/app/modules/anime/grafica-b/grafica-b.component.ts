import { Component, Input, OnInit } from "@angular/core";
import { ChartType } from "ng-apexcharts";

@Component({
  selector: "app-grafica-b",
  templateUrl: "./grafica-b.component.html",
  styleUrls: ["./grafica-b.component.scss"],
})
export class GraficaBComponent implements OnInit {
  barChart = {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: "#f1f1f1",
    },
  };

  @Input() xaxis: { categories: string[] } = { categories: [] };
  @Input() series: [{ data: number[] }] = [{ data: [] }];
  @Input() colors: string[] = ["#34c38f"];

  constructor() {}

  ngOnInit(): void {}
}
