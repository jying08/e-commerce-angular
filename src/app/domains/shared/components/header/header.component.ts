import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  hideSideMenu=signal(true);
  private cartService=inject(CartService);
  cart=this.cartService.cart;
  total=this.cartService.total;

  toogleSideMenu()
  {
    this.hideSideMenu.update(prevState=> !prevState);
  }

  


}
