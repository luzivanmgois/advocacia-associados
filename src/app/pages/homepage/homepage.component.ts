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

  submitAllUsers() {
    this.allUserService.getAllUsers().subscribe({
      next: (data) => {
        this.toastService.success("Buscando Todos Usuários");
        this.dialog.open(MoldalAllUsersComponent, {
          width: '520px',
          height: '700px',
          data: {users: data}
        });
    },
      error: () => this.toastService.error("Usuários não encontrados!")
    })
  }
  
  navigateToUserId() {
    this.router.navigate(['user-find-id']);
  }

  navigateToFileUpload() {
    this.router.navigate(['fileupload']);
  }
  
  logout() {    
    this.router.navigate(['login']);
  }
}