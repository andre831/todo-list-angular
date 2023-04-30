import { Component } from '@angular/core';
import { NavbarNavegation } from 'src/app/types/Navbar';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  navegation: NavbarNavegation[] = [
    {
      icon: 'fa-solid fa-house',
      title: 'Home',
      path: '',
    },
  ];
}
