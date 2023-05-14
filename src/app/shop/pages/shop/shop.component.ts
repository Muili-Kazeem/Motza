import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  isCartNavOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {}

  toggleCartNav() {
    this.isCartNavOpen = !this.isCartNavOpen
  }

  navigate(): void {
    this.isCartNavOpen = true;
  }
}
