import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartNavComponent } from "./shared/standalone_comps/cart-nav/cart-nav.component";
import { ProductPropComponent } from './pages/products/product-prop/product-prop.component';


@NgModule({
    declarations: [
        CartComponent,
        PaymentComponent,
        ProductsComponent,
        ProductDetailComponent,
        CheckoutComponent,
        ShopComponent,
        ProductPropComponent,
    ],
    imports: [
        CommonModule,
        ShopRoutingModule,
        CartNavComponent
    ]
})
export class ShopModule { }
