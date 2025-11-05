import { Injectable } from '@angular/core';

export interface Product1 {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Injectable({

  providedIn: 'root'
})

export class Productos {
  private productos: Product1[] = [
    {
      id: 1,
      nombre: 'Ferrari F8 Tributo',
      descripcion: 'Un superdeportivo que combina elegancia, potencia y tecnología con un motor V8 de 720 CV.',
      precio: 1200000000,
      imagen: 'imagenes/ferrarideportivo.webp',

    },

    {
      id: 2,
      nombre: 'Rolls-Royce Ghost',
      descripcion: 'Lujo, silencio y potencia en un sedán británico hecho a mano con los más altos estándares.',
      precio: 10000000000,
      imagen: 'imagenes/rollmoderno.jpg',
    },

    {
      id: 3,
      nombre: 'Maserati Levante',
      descripcion: 'El SUV de lujo italiano con un rugido inconfundible y un rendimiento impresionante.',
      precio: 1500000000,
      imagen: 'imagenes/maserati2.jpg',
    },

    {
      id: 4,
      nombre: 'Ferrari 250 GTO',
      descripcion: 'Una joya clásica del automovilismo, símbolo de elegancia y valor histórico incalculable.',
      precio: 1860000000,
      imagen: 'imagenes/ferrariclasico.jpg',
    },

    {
      id: 5,
      nombre: 'Rolls-Royce Silver Ghost',
      descripcion: 'El legendario modelo que marcó el inicio del lujo sobre ruedas a principios del siglo XX.',
      precio: 3250000000,
      imagen: 'imagenes/rollsilver.jpg',
    },


    {
      id: 6,
      nombre: 'Maserati MC20',
      descripcion: 'Diseñado para la pista, este deportivo representa la nueva era de innovación de Maserati.',
      precio: 1540000000,
      imagen: 'imagenes/maserati4.webp',
    }

    

  ];



  constructor() { }
  getProducts(): Product1[] {
    return this.productos;
  }


}



