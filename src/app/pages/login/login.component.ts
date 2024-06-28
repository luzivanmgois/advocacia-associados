import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  login: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ){
    this.loginForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  submit(){
    this.loginService.login(this.loginForm.value.login, this.loginForm.value.password).subscribe({
      next: () => {
        this.toastService.success("Login realizado com sucesso!");
        this.router.navigate(["homepage"]);
    },
      error: (err) => {
        if (err.status === 404) {
          this.toastService.error("Usuário não localizado.")
        } else if (err.status === 401) {
          this.toastService.error("A Senha informada está incorreta!")
        } else {
          this.toastService.error("Erro Desconhecido. Tente novamente!")
        }
      }
    })
  }

  navigate(){
    this.router.navigate(["register"])
  }
}
