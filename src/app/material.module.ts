/**
 * Created by volodymyr.ivchyk on 6/23/18.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule,
    MatInputModule, MatSelectModule, MatSliderModule, MatIconModule],
  exports: [MatButtonModule, MatToolbarModule,
    MatInputModule, MatSelectModule, MatSliderModule, MatIconModule]
})
export class MaterialModule { }
