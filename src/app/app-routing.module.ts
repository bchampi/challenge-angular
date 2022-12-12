import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home').then((m) => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./modules/auth').then((m) => m.AuthModule) },
  { path: 'products', loadChildren: () => import('./modules/product').then((m) => m.ProductModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
