// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Páginas públicas
import { SignInComponent } from './iam/pages/sign-in/sign-in.component';
import { SignUpComponent } from './iam/pages/sign-up/sign-up.component';

// Dashboard general
import { HomeownerDashboardComponent } from './dashboard/pages/homeowner-dashboard/homeowner-dashboard.component';
import { WelcomeComponent } from './dashboard/pages/welcome-dashboard/welcome-dashboard.component';

// Gestión de componentes e inventario
import { TypeManagementPageComponent } from './assets/pages/component-type-page/component-type-page.component';
import { ComponentPageComponent } from './assets/pages/component-page/component-page.component';
import { TechnicianInventoryPageComponent } from './assets/pages/inventory-page/inventory-page.component';

// Gestión de propiedades
import { PropertyManagementPageComponent } from './assets/pages/property-management-page/property-management-page.component';

// Búsqueda y detalles de técnicos
import { RequestPage } from './service-design-and-planning/pages/request-page/request.page';
import { SchedulePage } from './service-design-and-planning/pages/schedule-page/schedule.page';
import { ServicePage } from './service-design-and-planning/pages/service-page/service.page';

import { ServiceMonitoringPageComponent } from './monitoring/pages/service-monitoring-page.component';

// Dashboard de proveedor
import { ProviderDashboardComponent} from './public/provider/pages/provider-dashboard/provider-dashboard.component';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'dashboard/homeowner', component: HomeownerDashboardComponent },
  { path: 'dashboard/technician', component: ProviderDashboardComponent },
  { path: 'component-type', component: TypeManagementPageComponent },
  { path: 'component-management', component: ComponentPageComponent },
  { path: 'technician-inventory', component: TechnicianInventoryPageComponent },
  { path: 'requests', component: RequestPage },
  { path: 'schedules', component: SchedulePage },
  { path: 'services', component: ServicePage },
  { path: 'property-management', component: PropertyManagementPageComponent },
  { path: 'service-monitoring', component: ServiceMonitoringPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
