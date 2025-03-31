import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <ul>
        <li><div> Bestellsystem</div></li>
        <li><a routerLink="/koch">Koch</a></li>
        <li><a routerLink="/kellner">Kellner</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {}
