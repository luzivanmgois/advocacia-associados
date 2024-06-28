import { Component, OnInit } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MoldalUserComponent } from '../../components/modal-user/modal-user.component';

interface IdForm {
  id: FormControl
}

@Component({
 selector: 'app-user-find-id',
 standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    UsersService
  ],
 templateUrl: './user-find-id.component.html',
 styleUrls: ['./user-find-id.component.scss']
})
export class UserFindIdComponent implements OnInit {

  idForm: FormGroup<IdForm>;
  usuario: any;

constructor(
  private router: Router,
  private usersService: UsersService,
  private toastService: ToastrService,
  public dialog: MatDialog
){
  this.idForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(1)]),
  })
}

 ngOnInit(): void {
 }

 submit(){
  this.usersService.getUsuarioById(this.idForm.value.id).subscribe({
    next: (data) => {
      this.toastService.success("Os Dados do Usuário Foram Localizados.");
      this.dialog.open(MoldalUserComponent, {
        width: '520px',
        height: '370px',
        data: {usuario: data}
      });
  },
    error: () => this.toastService.error("Usuário não encontrado! Verifique o ID informado e tente novamente.")
  })
}

backUsersPanel(){
  this.router.navigate(["users-panel"])
}
}