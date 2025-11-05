import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1, Productos} from '../../services/products';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']

})

export class Products {
  productos: Product1[] = [];


  constructor(private productService: Productos) {
    this.productos = this.productService.getProducts();
  }
}