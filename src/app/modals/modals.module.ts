import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item.component';
import { HombreEnLunaComponent } from './hombre-en-luna/hombre-en-luna.component';
import { CountersComponent } from './counters/counters.component';






@NgModule({
  declarations: [ModalComponent,ShoppingCartComponent,ShoppingCartItemComponent,HombreEnLunaComponent, CountersComponent,],
  imports: [ CommonModule, ],
  exports:[ModalComponent,]
})
export class ModalsModule { }
