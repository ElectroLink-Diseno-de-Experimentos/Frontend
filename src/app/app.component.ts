import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from './public/generic/components/language-switcher/language-switcher.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({

  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    LanguageSwitcherComponent,
    RouterModule,
    TranslatePipe
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElectroLink';
  activeItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' }
  ];
  changeMenuLabel = 'Change Menu';

  constructor(private router: Router) {}

  goToSignIn() {
    this.router.navigate(['/sign-in']);
  }

  goToSignUp() {
    this.router.navigate(['/sign-up']);
  }

  changeMenu() {
    // Implement the logic for changing the menu here
    console.log('Change menu button clicked!');
  }
}
