import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
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