import { OnDestroy, OnInit } from '@angular/core';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { Tab } from 'src/app/interfaces/tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.scss'],
})
export class TabsComponent implements OnDestroy, OnInit {

  @Input() tabs:Tab[]=[];
  public width:number = 0;

  constructor(
  ) {
    console.log('Hello Tabs Component');
  }

  public ngOnInit(): void {
    this.width  = 100 / this.tabs.length
  }

  public ngOnDestroy(): void {

  }

}
