import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-equipment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-equipment.component.html',
})
export class EditEquipmentComponent {
  equipo: any = { id: null, nombre: '', estado: '' };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const lista = JSON.parse(localStorage.getItem('inventario') || '[]');
    this.equipo = lista.find((e: any) => e.id === id);
  }

  guardar() {
    const lista = JSON.parse(localStorage.getItem('inventario') || '[]');
    const index = lista.findIndex((e: any) => e.id === this.equipo.id);
    lista[index] = this.equipo;
    localStorage.setItem('inventario', JSON.stringify(lista));
    this.router.navigate(['/']);
  }

  volver() {
    this.router.navigate(['/']);
  }
}
