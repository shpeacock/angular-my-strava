import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FinishlistComponent } from './finishlist/finishlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MestuffComponent } from './mestuff/mestuff.component';
import { AbparkComponent} from './abpark/abpark.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FinishlistComponent,
    NavbarComponent,
    MestuffComponent,
    AbparkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
