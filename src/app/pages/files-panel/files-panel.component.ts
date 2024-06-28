import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-files-panel',
  standalone: true,
  imports: [
      DefaultLoginLayoutComponent,
      PrimaryInputComponent,
  ],
  providers: [
  ],
  templateUrl: './files-panel.component.html',
  styleUrls: ['./files-panel.component.scss'],
})
export class FilesPanelComponent {
  constructor(
    private router: Router,
    public dialog: MatDialog
  ) {}

  navigateToFileUpload() {
    this.router.navigate(['fileupload']);
  }

  navigateToFileRead() {
    this.router.navigate(['files-panel']);
  }

  backHomePage() {    
    this.router.navigate(['homepage']);
  }
}