import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

import { UiRoutingModule } from './ui-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    UiRoutingModule
  ],
  declarations: [LayoutComponent, HeaderComponent, MainComponent, SidebarComponent]
})
export class UiModule { }
