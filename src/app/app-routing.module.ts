import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { SobreComponent } from './pages/sobre/sobre.component'
import { PageErrorComponent } from './pages/page-error/page-error.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'sobre',
    component: SobreComponent,
    children: [
      { path: 'test', component: SobreComponent },
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  },
  { path: '404', component: PageErrorComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  // useHash is useful for older applications
  // that don't understand the newer routing system 
  // (like Angular + Cordova)
  // imports: [RouterModule.forRoot(routes, { useHash: true })],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
