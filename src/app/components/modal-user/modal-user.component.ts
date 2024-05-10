import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
 selector: 'app-moldal-user',
 standalone: true,
 imports: [MatDialogModule],
 templateUrl: './modal-user.component.html',
 styleUrls: ['./modal-user.component.scss']
})
export class MoldalUserComponent {
  usuario: any;

 constructor(
    public dialogRef: MatDialogRef<MoldalUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

 onNoClick(): void {
    this.dialogRef.close();
 }
}
