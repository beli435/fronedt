import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioService, Equipo } from '../../services/inventario.service';

@Component({
  selector: 'app-add-equipment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-equipment.component.html',
})
export class AddEquipmentComponent {
  equipo: Equipo = {
    nombre: '',
    cantidad: 0,
    fechaIngreso: '',
    categoria: '',
    descripcion: '',
    ubicacion: '',
    responsable: '',
    imagen: '',
    estado: 'Disponible', // 🔥 Se agrega aquí 👈
  };
  constructor(private inventarioService: InventarioService, private router: Router) {}

  guardar() {
    this.inventarioService.agregar(this.equipo).subscribe({
      next: () => this.router.navigate(['/inventario']),
      error: () => alert('Error al guardar'),
    });
  }

  volver() {
    this.router.navigate(['/inventario']);
  }
}
