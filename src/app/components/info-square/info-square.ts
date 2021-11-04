import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Square } from 'src/app/interfaces/square.interface';

@Component({
  selector: 'app-info-square',
  templateUrl: './info-square.html',
  styleUrls: ['./info-square.scss'],
})
export class SquareComponent implements OnDestroy, OnInit {

  @Input() squares:Square[]=[];

  constructor(
  ) {
    console.log('Hello Tabs Component');
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {

  }

}
