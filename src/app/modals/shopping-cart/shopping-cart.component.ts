import { Component, OnInit } from '@angular/core';
import { CartItem } from './shopping-cart-item';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[] = [
    {
      imageUrl: 'headphones.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      imageUrl: 'keyboard.jpg',
      name: 'Teclado',
      price: 14.50,
    },
    {
      imageUrl: 'monitor.jpg',
      name: 'Monitor',
      price: 65.24,
    },
  

  ];
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(itemToDelete: CartItem): void{
    this.cartItems = this.cartItems.filter(
      item=> item !== itemToDelete
    )
  }

  get total(): number {
    return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
  }

}
