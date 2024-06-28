import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-moldal-content-file',
 standalone: true,
 imports: [MatDialogModule, CommonModule],
 templateUrl: './modal-content-file.component.html',
 styleUrls: ['./modal-content-file.component.scss']
})
export class MoldalContentFileComponent {

 constructor(
    public dialogRef: MatDialogRef<MoldalContentFileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { content: string }) {}

 onNoClick(): void {
    this.dialogRef.close();
 }
}
