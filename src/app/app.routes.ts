import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FileUploadComponent } from './pages/fileupload/fileupload.component';
import { UsuarioConsultaComponent } from './pages/usuario-consulta/usuario-consulta.component';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: SignUpComponent
    },
    {
        path: "homepage",
        component: HomepageComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "fileupload",
        component: FileUploadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "usuario-consulta",
        component: UsuarioConsultaComponent,
        canActivate: [AuthGuard]
    }
];
