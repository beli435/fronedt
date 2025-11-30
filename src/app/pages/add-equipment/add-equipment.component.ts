import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-equipment.component.html',
})
export class AddEquipmentComponent {
  equipo = { nombre: '', estado: '' };

  constructor(private router: Router) {}

  guardar() {
    const lista = JSON.parse(localStorage.getItem('inventario') || '[]');
    lista.push({ id: Date.now(), ...this.equipo });
    localStorage.setItem('inventario', JSON.stringify(lista));
    this.router.navigate(['/']);
  }

  volver() {
    this.router.navigate(['/']);
  }
}
