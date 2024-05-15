import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { AllUsersService } from '../../services/all-users.service';
import { MoldalAllUsersComponent } from '../modal-all-users/modal-all-users.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
      DefaultLoginLayoutComponent,
      PrimaryInputComponent,
  ],
  providers: [
    AllUsersService
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(
    private router: Router,
    private allUserService: AllUsersService,
    private toastService: ToastrService,
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