import { Component, OnInit } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioModalComponent } from '../../components/usuario-modal/usuario-modal.component';

interface IdForm {
  id: FormControl
}

@Component({
 selector: 'app-usuario-consulta',
 standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    UsuarioService
  ],
 templateUrl: './usuario-consulta.component.html',
 styleUrls: ['./usuario-consulta.component.scss']
})
export class UsuarioConsultaComponent implements OnInit {

  idForm: FormGroup<IdForm>;
  usuario: any;

constructor(
  private router: Router,
  private usuarioService: UsuarioService,
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
  this.usuarioService.getUsuarioById(this.idForm.value.id).subscribe({
    next: (data) => {
      this.toastService.success("Usuário Encontrado.");
      this.dialog.open(UsuarioModalComponent, {
        width: '500px',
        height: '350px',
        data: {usuario: data} // Passa os dados do usuário para o modal
      });
  },
    error: () => this.toastService.error("Usuário não encontrado! Verifique o ID informado e tente novamente.")
  })
}

voltar(){
  this.router.navigate(["homepage"])
}
}
