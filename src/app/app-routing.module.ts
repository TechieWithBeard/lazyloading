import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickLoadPageComponent } from './click-load-page/click-load-page.component';
import { DynamicClickLoadPageComponent } from './dynamic-click-load-page/dynamic-click-load-page.component';

const routes: Routes = [
  {path:'',redirectTo:'clickload',pathMatch:'full'},
  { path:  'clickload', component:  ClickLoadPageComponent},

  {
    path: 'dynaload',
    loadChildren: () => import('./dynamic-click-load-page/dynamic-load.module').then(m=>m.DynamicLoadModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
