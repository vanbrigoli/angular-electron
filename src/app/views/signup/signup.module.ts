import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';

import { SignupRoutingModule } from './signup-routing.module';

import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
