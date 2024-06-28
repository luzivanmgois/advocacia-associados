import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
      DefaultLoginLayoutComponent,
      PrimaryInputComponent,
  ],
  providers: [
    UsersService
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {}
   
  navigateToUsersPanel() {
    this.router.navigate(['users-panel']);
  }

  navigateToFilesPanel() {
    this.router.navigate(['files-panel']);
  }

  logout() {    
    this.router.navigate(['login']);
  }
}