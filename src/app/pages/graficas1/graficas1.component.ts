import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {
  public doughnutChartLabels: string[] = ['Mundanos', 'Cristianos', 'Ateos'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  constructor() {}

  ngOnInit() {}
}
