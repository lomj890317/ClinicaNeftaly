import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  loading = true;

  showModal = false;
  errorMessage = '';
  successMessage = '';

  // Formulario del modal
  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    stock: new FormControl(0, [Validators.required, Validators.min(0)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
  });

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Cargar lista de productos
  loadProducts() {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data;
        this.loading = false;
      },
      error: err => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  // Abrir modal
  openModal() {
    this.showModal = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.productForm.reset({ stock: 0, price: 0 });
  }

  // Cerrar modal
  closeModal() {
    this.showModal = false;
  }

  // Guardar producto usando ProductService
 submitProduct() {
   if (this.productForm.valid) {
     // Casting seguro: los campos del formulario coinciden con Omit<Product, 'id'>
     this.productService.addProduct(this.productForm.value as Omit<Product, 'id'>)
       .subscribe({
         next: (res) => {
           this.successMessage = 'Producto agregado correctamente';
           this.closeModal();
           this.loadProducts(); // recargar lista
         },
         error: (err) => {
           this.errorMessage = err.error?.message || 'Error al agregar el producto';
         }
       });
   }
}
}
