import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VimeoPage } from './vimeo';

@NgModule({
  declarations: [
    VimeoPage,
  ],
  imports: [
    IonicPageModule.forChild(VimeoPage),
  ],
})
export class VimeoPageModule {}
