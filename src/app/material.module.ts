/**
 * Created by volodymyr.ivchyk on 6/23/18.
 */
import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatListModule, MatPaginatorModule,
    MatInputModule, MatSelectModule, MatSliderModule, MatIconModule],
  exports: [MatButtonModule, MatToolbarModule, MatListModule, MatPaginatorModule,
    MatInputModule, MatSelectModule, MatSliderModule, MatIconModule]
})
export class MaterialModule { }
