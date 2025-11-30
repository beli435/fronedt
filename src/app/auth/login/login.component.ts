import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'admin' && this.password === '1234') {
      localStorage.setItem('sesion', 'activa');
      this.router.navigate(['/inventario']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
