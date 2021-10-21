import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class SharedModule { }
