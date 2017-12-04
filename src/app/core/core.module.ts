import {NgModule, Optional, SkipSelf} from '@angular/core';

import { AuthService } from './index';

@NgModule({
  providers: [AuthService]
})
export class CoreModule {
  // Prevent re-importing core module
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if(core) throw new Error("Core module already imported.");
  }
}
