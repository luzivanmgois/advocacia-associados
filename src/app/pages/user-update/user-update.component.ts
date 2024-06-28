import { Component, OnInit } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MoldalUserComponent } from '../../components/modal-user/modal-user.component';

interface IdForm {
  id: FormControl,
  password: FormControl
}

@Component({
 selector: 'app-user-update',
 standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    UsersService
  ],
 templateUrl: './user-update.component.html',
 styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {

  idForm: FormGroup<IdForm>;
  usuario: any;

constructor(
  private router: Router,
  private usersService: UsersService,
  private toastService: ToastrService,
  public dialog: MatDialog
){
  this.idForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })
}

 submit(){
  this.usersService.updatePass(this.idForm.value.id, this.idForm.value.password).subscribe({
    next: () => {
      this.toastService.success("Senha Atualizada com Sucesso!");
  },
    error: (err) => {
      if (err.status === 403) {
        this.toastService.error("Usuário sem permissão para executar essa ação.")
      } else if (err.status === 404) {
        this.toastService.error("O ID do Usuário não foi localizado.")
      } else {
        this.toastService.error("Erro Desconhecido. Tente novamente.")
      }
    }
  })
} 

backUsersPanel(){
  this.router.navigate(["users-panel"])
}
}