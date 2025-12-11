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
    this.http.get<any[]>('http://localhost:3000/api/usuarios').subscribe({
      next: (usuarios) => {
        const encontrado = usuarios.find(
          (u) => u.email === this.usuario && u.password === this.password
        );

        if (encontrado) {
          localStorage.setItem('sesion', 'activa');
          this.router.navigate(['/inventario']);
        } else {
          this.error = 'Usuario o contraseña incorrectos';
        }
      },
      error: () => {
        this.error = 'Error al conectar con la API';
      }
    });
  }
}
