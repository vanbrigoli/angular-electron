import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { loginEntryPoint } from '@app/views/login/login.module';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: loginEntryPoint },
  { path: 'store', loadChildren: './views/ui/ui.module#UiModule' },
  { path: 'signup', loadChildren: './views/signup/signup.module#SignupModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
