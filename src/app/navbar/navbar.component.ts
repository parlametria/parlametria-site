import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public clicked = false;

  navbarOpen = false;
  element: any;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onClick(event): void {
    event.preventDefault();
    event.stopPropagation();
    this.clicked = true;
  }

  @HostListener('document:click', ['event'])
  private clickedOutside(event): void {
    if (this.clicked) {
      this.element.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
    }
  }

}
