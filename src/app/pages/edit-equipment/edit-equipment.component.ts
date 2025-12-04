import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InventarioService, Equipo } from '../../services/inventario.service';

@Component({
  selector: 'app-edit-equipment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-equipment.component.html',
})
export class EditEquipmentComponent {
  equipo!: Equipo;

  constructor(
    private route: ActivatedRoute,
    private inventarioService: InventarioService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inventarioService.obtenerPorId(id).subscribe((data) => {
      this.equipo = data;
    });
  }

  guardarCambios() {
    this.inventarioService.actualizar(this.equipo.id!, this.equipo).subscribe({
      next: () => this.router.navigate(['/inventario']),
      error: () => alert('Error al actualizar'),
    });
  }

  volver() {
    this.router.navigate(['/inventario']);
  }
}
