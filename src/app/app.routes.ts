import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { routes as navRoutes } from './components/navbar/navbar.routing';

export const routes: Routes = [
    {
        path: '',
        component: NavbarComponent,
        children: navRoutes
      },
];
