import {NgModule, Optional, SkipSelf} from '@angular/core';

import { AuthService } from './index';

@NgModule({
  providers: [AuthService]
})
export class CoreModule {
  // Prevent importing core module
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if(core) throw new Error("Thou shall not run.");
  }
}
