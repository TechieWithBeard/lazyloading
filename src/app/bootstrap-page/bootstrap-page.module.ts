import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapPageComponent } from './bootstrap-page.component';

const routes: Routes = [
  {path: '', component: BootstrapPageComponent}
];


@NgModule({
  declarations: [
    BootstrapPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class BootstrapPageModule { }
