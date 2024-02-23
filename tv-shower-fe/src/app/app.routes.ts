import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { 
    path: 'list',
    loadChildren: () => import('@app/features/list/list.module').then(m => m.ListModule),
  },
  {
    path: 'add',
    loadChildren: () => import('@app/features/add/add.module').then(m => m.AddModule),
  }
];
