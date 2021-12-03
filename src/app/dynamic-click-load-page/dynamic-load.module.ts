import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicClickLoadPageComponent } from './dynamic-click-load-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: DynamicClickLoadPageComponent}
];

@NgModule({
  declarations: [
    DynamicClickLoadPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports:[RouterModule]
})
export class DynamicLoadModule { }
