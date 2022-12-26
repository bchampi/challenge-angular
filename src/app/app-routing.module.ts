import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './modules/auth/auth.guard'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home').then((m) => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./modules/auth').then((m) => m.AuthModule) },
  {
    path: 'products',
    loadChildren: () => import('./modules/product').then((m) => m.ProductModule),
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
