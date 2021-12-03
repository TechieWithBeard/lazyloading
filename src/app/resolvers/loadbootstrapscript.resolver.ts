import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LazyScriptLoaderService } from '../services/lazy-script-loader.service';

@Injectable({
  providedIn: 'root'
})
export class LoadbootstrapscriptResolver implements Resolve<boolean> {
  constructor(public lazyScriptLoaderService:LazyScriptLoaderService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    this.lazyScriptLoaderService.loadExternalStyles("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css","sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3","anonymous")
   this.lazyScriptLoaderService.loadScript("bootstrap")
    return of(true);
  }
}
