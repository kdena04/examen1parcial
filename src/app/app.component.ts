import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo3';

  // Propiedades
  celular = {
    id: 0,
    marca: '',
    modelo: '',
    precio: 0,
    vendido: false
  };

  listaCelulares = [
    { id: 1, marca: 'Samsung', modelo: 'Galaxy S21', precio: 12000, vendido: false },
    { id: 2, marca: 'Apple', modelo: 'iPhone 13', precio: 18000, vendido: true },
    { id: 3, marca: 'Xiaomi', modelo: 'Redmi Note 10', precio: 8000, vendido: false },
    { id: 4, marca: 'Huawei', modelo: 'P40 Pro', precio: 15000, vendido: false },
    { id: 5, marca: 'Google', modelo: 'Pixel 6', precio: 14000, vendido: true },
  ];

  // Función para agregar un celular al arreglo
  agregarCelular() {
    if (this.celular.id == 0) {
      alert('El ID del celular no puede ser CERO');
      return;
    }

    // Verificar que el ID no exista
    for (let i = 0; i < this.listaCelulares.length; i++) {
      if (this.celular.id == this.listaCelulares[i].id) {
        alert('Ya existe un celular con ese ID');
        return;
      }
    }

    // Dar de alta el celular
    this.listaCelulares.push({
      id: this.celular.id,
      marca: this.celular.marca,
      modelo: this.celular.modelo,
      precio: this.celular.precio,
      vendido: false 
    });

    // Resetear el objeto celular
    this.celular.id = 0;
    this.celular.marca = '';
    this.celular.modelo = '';
    this.celular.precio = 0;
    this.celular.vendido = false;
  }

  // Función para seleccionar un celular de la tabla
  seleccionarCelular(celularSeleccionado: { id: number; marca: string; modelo: string; precio: number; vendido: boolean }) {
    this.celular.id = celularSeleccionado.id;
    this.celular.marca = celularSeleccionado.marca;
    this.celular.modelo = celularSeleccionado.modelo;
    this.celular.precio = celularSeleccionado.precio;
    this.celular.vendido = celularSeleccionado.vendido;
  }

  // Función para modificar un celular existente 
  modificarCelular() {
    for (let i = 0; i < this.listaCelulares.length; i++) {
      if (this.celular.id == this.listaCelulares[i].id) {
        this.listaCelulares[i].marca = this.celular.marca;
        this.listaCelulares[i].modelo = this.celular.modelo;
        this.listaCelulares[i].precio = this.celular.precio;
        this.listaCelulares[i].vendido = this.celular.vendido;

        // Resetear el celular
        this.celular.id = 0;
        this.celular.marca = '';
        this.celular.modelo = '';
        this.celular.precio = 0;
        this.celular.vendido = false;
        return;
      }
    }
    alert('No existe ese ID');
  }

  // Función para eliminar un celular de la tabla
  eliminarCelular(id: number) {
    for (let i = 0; i < this.listaCelulares.length; i++) {
      if (id == this.listaCelulares[i].id) {
        this.listaCelulares.splice(i, 1);
        return;
      }
    }
  }

  // Función para cambiar el estado de un celular (vendido/disponible)
  cambiarEstado(celular: { id: number; marca: string; modelo: string; precio: number; vendido: boolean }) {
    celular.vendido = !celular.vendido; // Cambia el estado
  }
}