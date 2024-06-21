import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ProductComponent,HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


products=signal<Product[]>([]);
cart=signal<Product[]>([]);

constructor()
{
  const initProducts:Product[]=[
    {
      id: Date.now(),
      title: 'Pro 1',
      price: 100,
      image: 'https://picsum.photos/200/300',
      creationAt:new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Pro 2',
      price: 100,
      image: 'https://picsum.photos/200/300',
      creationAt:new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Pro 3',
      price: 100,
      image: 'https://picsum.photos/200/300',
      creationAt:new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Pro 1',
      price: 100,
      image: 'https://picsum.photos/200/300',
      creationAt:new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Pro 2',
      price: 100,
      image: 'https://picsum.photos/200/300',
      creationAt:new Date().toISOString()
    },
    {
      id: Date.now(),
      title: 'Pro 3',
      price: 100,
      image: 'https://picsum.photos/200/300',
      creationAt:new Date().toISOString()
    }
  ];
  this.products.set(initProducts);
}

  addToCart(product:Product)
  {
    this.cart.update(prevState=>[...prevState,product]);

  }
}
