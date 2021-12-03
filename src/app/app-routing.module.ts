import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickLoadPageComponent } from './click-load-page/click-load-page.component';
import { DynamicClickLoadPageComponent } from './dynamic-click-load-page/dynamic-click-load-page.component';
import { LoadbootstrapscriptResolver } from './resolvers/loadbootstrapscript.resolver';

const routes: Routes = [
  {path:'',redirectTo:'clickload',pathMatch:'full'},
  { path:  'clickload', component:  ClickLoadPageComponent},

  {
    path: 'dynaload',
    loadChildren: () => import('./dynamic-click-load-page/dynamic-load.module').then(m=>m.DynamicLoadModule)
  },
  {
    path: 'loadBootstrap',
    loadChildren: () => import('./bootstrap-page/bootstrap-page.module').then(m=>m.BootstrapPageModule),resolve:{cres:LoadbootstrapscriptResolver}
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
