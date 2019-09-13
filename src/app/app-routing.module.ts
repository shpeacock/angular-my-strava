import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MestuffComponent} from './mestuff/mestuff.component';
import { FinishlistComponent} from './finishlist/finishlist.component';
import { AbparkComponent } from './abpark/abpark.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MestuffComponent},
  {path: 'abpark', pathMatch: 'full', component: AbparkComponent},
  {path: 'finishlist', pathMatch: 'full', component: FinishlistComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
