import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  mostraMenu = false;

  abreMenu() {
    this.mostraMenu = !this.mostraMenu;
  }
}
