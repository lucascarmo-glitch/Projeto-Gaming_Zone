import { Component, Renderer2 } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from "../app-routing.module";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, AppRoutingModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css'],
})
export class Menu {

  searchActive = false;

  constructor(private renderer: Renderer2) {}

  openSearch(): void {
    this.searchActive = true;
    this.renderer.addClass(document.body, 'search-active');
  }

  closeSearch(): void {
    this.searchActive = false;
    this.renderer.removeClass(document.body, 'search-active');
  }
}