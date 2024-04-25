import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
 selector: 'app-usuario-modal',
 standalone: true,
 imports: [MatDialogModule],
 templateUrl: './usuario-modal.component.html',
 styleUrls: ['./usuario-modal.component.scss']
})
export class UsuarioModalComponent {
  usuario: any;

 constructor(
    public dialogRef: MatDialogRef<UsuarioModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

 onNoClick(): void {
    this.dialogRef.close();
 }
}
