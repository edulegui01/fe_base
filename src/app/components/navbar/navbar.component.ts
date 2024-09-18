import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { menu } from '../../class/menu-items';

const MATERIAL_MODULES = [
  MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
  CommonModule, SidenavComponent
]

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MATERIAL_MODULES
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  menuList: Array<any> = [];
  username = null;
  // appLabels = GlobalMessage.APP_LABELS;
  // menuItems = MenuItems.MENU_ITEMS;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    //private router: Router,
    //private globalService: GlobalService,
    // private userService: UserService,
) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
}

ngOnInit(): void {
    //this.username = this.globalService.getUser();
    this.menuList = menu.menuList;
}

ngAfterViewInit() {
}

ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
}

}
