import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Statistic } from 'src/app/interfaces/statistic.interface';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.html',
  styleUrls: ['./statistic.scss'],
})
export class StatisticComponent implements OnDestroy, OnInit {

  @Input() statistics:Statistic[]=[];

  constructor(
  ) {
    console.log('Hello Tabs Component');
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {

  }

}
