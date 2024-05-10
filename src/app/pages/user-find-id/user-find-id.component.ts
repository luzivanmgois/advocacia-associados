import { Component, OnInit } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
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
    UserService
  ],
 templateUrl: './user-find-id.component.html',
 styleUrls: ['./user-find-id.component.scss']
})
export class UserFindIdComponent implements OnInit {

  idForm: FormGroup<IdForm>;
  usuario: any;

constructor(
  private router: Router,
  private UserService: UserService,
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
  this.UserService.getUsuarioById(this.idForm.value.id).subscribe({
    next: (data) => {
      this.toastService.success("Usuário Encontrado.");
      this.dialog.open(MoldalUserComponent, {
        width: '520px',
        height: '370px',
        data: {usuario: data}
      });
  },
    error: () => this.toastService.error("Usuário não encontrado! Verifique o ID informado e tente novamente.")
  })
}

voltar(){
  this.router.navigate(["homepage"])
}
}