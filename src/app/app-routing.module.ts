import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardAuthGuard } from './guard/dashboard.auth.guard';
import { LoginAuthGuard } from './guard/login.auth.guard';

const routes: Routes = [
  {
    path: '',
     // path: '',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginAuthGuard]
    // redirectTo: 'folder/Inbox',
    // pathMatch: 'full'
  },
  {
    path: 'folder/:id', 
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [DashboardAuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginAuthGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [LoginAuthGuard]
  },
 
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule),
    canActivate: [DashboardAuthGuard]
  },
  {
    path: 'donation',
    loadChildren: () => import('./pages/custmer/donation/donation.module').then( m => m.DonationPageModule),
    canActivate: [DashboardAuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule),
    canActivate: [DashboardAuthGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [DashboardAuthGuard]
  },
  {
    path: 'info-connect',
    loadChildren: () => import('./pages/custmer/info-connect/info-connect.module').then( m => m.InfoConnectPageModule),
    canActivate: [DashboardAuthGuard]
  },
  
 
  {
    path: 'select-location',
    loadChildren: () => import('./pages/custmer/select-location/select-location.module').then( m => m.SelectLocationPageModule),
    canActivate: [DashboardAuthGuard]
  },
  // {
  //   path: 'custmer',
  //   loadChildren: () => import('./pages/custmer/custmer.module').then( m => m.CustmerPageModule)
  // },
  {
    path: 'rest',
    loadChildren: () => import('./pages/custmer/rest/rest.module').then( m => m.RestPageModule),
    canActivate: [DashboardAuthGuard]
  },
  {
    path: 'driver',
    loadChildren: () => import('./pages/driver/driver.module').then( m => m.DriverPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
