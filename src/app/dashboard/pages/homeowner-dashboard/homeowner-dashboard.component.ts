import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RequestsCardComponent} from '../../../public/owner/components/option-cards/requests-card/requests-card.component';
import { ServicesCardComponent} from '../../../public/owner/components/option-cards/services-card/services-card.component';
import { PropertiesCardComponent} from '../../../public/owner/components/option-cards/properties-card/properties-card.component';

import { AuthenticationService } from '../../../iam/services/authentication.service';

@Component({
  selector: 'app-homeowner-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    RequestsCardComponent,
    ServicesCardComponent,
    PropertiesCardComponent,
  ],
  templateUrl: './homeowner-dashboard.component.html',
  styleUrls: ['./homeowner-dashboard.component.css']
})
export class HomeownerDashboardComponent {
  isAuthenticated = false;
  userName = '';

  constructor(private router: Router, private authService: AuthenticationService) {
    this.authService.isSignedIn.subscribe(status => {
      this.isAuthenticated = status;
    });
    this.authService.currentUsername.subscribe(username => {
      this.userName = username;
    });
  }

  goToTechnicianDashboard(): void {
    this.router.navigate(['/dashboard/technician']);
  }
}
