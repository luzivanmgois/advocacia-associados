import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { MoldalAllUsersComponent } from '../modal-all-users/modal-all-users.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-panel',
  standalone: true,
  imports: [
      DefaultLoginLayoutComponent,
      PrimaryInputComponent,
  ],
  providers: [
    UsersService
  ],
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.scss'],
})
export class UsersPanelComponent {
  constructor(
    private router: Router,
    private usersService: UsersService,
    private toastService: ToastrService,
    public dialog: MatDialog
  ) {}

  submitAllUsers() {
    this.usersService.getAllUsers().subscribe({
      next: (data) => {
        this.toastService.success("Usuários Localizados.");
        this.dialog.open(MoldalAllUsersComponent, {
          width: '520px',
          height: '700px',
          data: {users: data}
        });
    },
      error: () => this.toastService.error("Não foram encontrados usuários cadastrados!")
    })
  }
  
  navigateToUserId() {
    this.router.navigate(['user-find-id']);
  }

  navigateToUserUpdate() {
    this.router.navigate(['user-update']);
  }

  navigateToUserDelete() {
    this.router.navigate(['user-delete-id']);
  }
  
  backHomePage() {    
    this.router.navigate(['homepage']);
  }
}