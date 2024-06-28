import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FileUploadComponent } from './pages/fileupload/fileupload.component';
import { UserFindIdComponent } from './pages/user-find-id/user-find-id.component';
import { UsersPanelComponent } from './pages/users-panel/users-panel.component';
import { FilesPanelComponent } from './pages/files-panel/files-panel.component';
import { UserDeleteIdComponent } from './pages/user-delete-id/user-delete-id.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserUpdateComponent } from './pages/user-update/user-update.component';
import { ReadFileComponent } from './pages/read-file/read-file.component';

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
        path: "user-find-id",
        component: UserFindIdComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "users-panel",
        component: UsersPanelComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "files-panel",
        component: FilesPanelComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "read-file",
        component: ReadFileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "user-delete-id",
        component: UserDeleteIdComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "user-update",
        component: UserUpdateComponent,
        canActivate: [AuthGuard]
    }
];
