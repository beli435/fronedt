import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const body = {
      email: this.usuario,
      password: this.password,
    };

    this.http.post('https://reqres.in/api/login', body).subscribe({
      next: (resp: any) => {
        localStorage.setItem('token', resp.token);
        this.router.navigate(['/inventario']);
      },
      error: () => {
        this.error = 'Credenciales incorrectas';
      }
    });
  }
}
