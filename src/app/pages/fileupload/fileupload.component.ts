import { Component } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
 selector: 'app-fileupload',
 standalone: true,
 imports: [HttpClientModule,
          CommonModule,
          FormsModule,
          AsyncPipe],
 templateUrl: './fileupload.component.html',
 styleUrls: ['./fileupload.component.scss']
})
export class FileUploadComponent {
 fileName: string = '';
 selectedFile!: File;

 constructor(private http: HttpClient, private router: Router, private toastService: ToastrService) {}

 onFileSelected(event: Event) {
  const fileList = (event.target as HTMLInputElement).files;
  if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
  }
}


onUpload() {
  const formData = new FormData();
  formData.append('arquivo', this.selectedFile);
  formData.append('nome', this.fileName);

  const token = sessionStorage.getItem('auth-token');

  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  this.http.post('http://localhost:8080/arquivo/enviodocumento', formData, { headers, observe: 'response' })
  .subscribe({   
    error: (error: HttpErrorResponse) => {
      if (error.status === 201) {
        this.toastService.success("Arquivo salvo com Sucesso!");
      } else if (error.status === 400) {
        this.toastService.error("Extensão Inválida!");
      } else if (error.status === 401) {
        this.toastService.error("Erro! Usuário não autenticado.");
      } else if (error.status === 409) {
        this.toastService.error("Arquivo já existe no servidor!");
      } else {
        this.toastService.error("Erro inesperado! Tente novamente mais tarde.");
      }
    }
  });
}
backHomepage() {
  this.router.navigate(["homepage"])
}
}