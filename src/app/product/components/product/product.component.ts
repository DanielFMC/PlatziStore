import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  today = new Date();

  constructor(private cartService: CartService) {
    console.log('1. Constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //     console.log('2. ngOnChanges');
  //     console.log(changes);
  // }

  ngOnInit() {
    console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy');
  }

  addCart() {
    console.log('Añadido al carrito');
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id);
  }
}
