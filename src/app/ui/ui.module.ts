import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule
  ],
  declarations: [LayoutComponent, HeaderComponent, MainComponent, SidebarComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
