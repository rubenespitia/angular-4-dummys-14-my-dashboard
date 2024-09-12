import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, input, output, Output } from '@angular/core';
import { Product } from '../../../../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent { 
  public product = input<Product>();

  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    const quantity = this.product()?.quantity ?? 0; // Si product es undefined, quantity será 0.
    this.onIncrementQuantity.emit(quantity + 1);
  }
}
