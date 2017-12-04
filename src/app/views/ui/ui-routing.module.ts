import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent }
];

export const UiRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
