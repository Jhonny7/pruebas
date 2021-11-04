import { OnDestroy, OnInit } from '@angular/core';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  //encapsulation: ViewEncapsulation.None
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class HeaderComponent implements OnDestroy, OnInit {

  @Input() title:string = "";

  public img1:string = "assets/icons/back.svg";
  public img2:string = "assets/icons/notificacion.svg";

  constructor(
  ) {
    console.log('Hello HeaderComponent Component');
  }

  public ngOnInit(): void {

  }

  public ngOnDestroy(): void {

  }

  back() {
    window.history.back();
  }
}
