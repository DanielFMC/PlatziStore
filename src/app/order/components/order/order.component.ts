import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable } from 'rxjs';
// import { GroupbyidPipe } from '../../../shared/pipes/groupbyid/groupbyid.pipe';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  displayedColumns: string[] = ['image', 'title', 'price', 'actions'];

  constructor(private cartService: CartService) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {}
}
