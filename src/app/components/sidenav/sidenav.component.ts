import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MenuNavigationComponent } from '../menu-navigation/menu-navigation.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, RouterOutlet, MenuNavigationComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

  mobileQuery!: MediaQueryList;
  @Input() menuList: Array<any> = [];
  @Input() preview = false;
  @Input() marginTop: any = null;
  @Input() mode: any = null;
  @Input() fixedInViewport: any = null;
  @Input() fixedToGap: any = null;




}
