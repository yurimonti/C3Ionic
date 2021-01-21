import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'clienti',
    loadChildren: () => import('./clienti/clienti.module').then( m => m.ClientiPageModule)
  },
  {
    path: 'prova-registration',
    loadChildren: () => import('./prova-registration/prova-registration.module').then( m => m.ProvaRegistrationPageModule)
  },
  {
    path: 'commerciante',
    loadChildren: () => import('./commerciante/commerciante.module').then( m => m.CommerciantePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
