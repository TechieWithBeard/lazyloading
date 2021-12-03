import { Injectable } from '@angular/core';




const ScriptList = [
  { name: 'bootstrap', src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js' },

];


@Injectable({
  providedIn: 'root'
})
export class LazyScriptLoaderService {

  private scripts: any = {};



  constructor() {
    ScriptList.forEach((script: any) => {
      this.scripts[script.name] = {
          loaded: false,
          src: script.src
      };
  });
   }


   load(...scripts: string[]) {
    const promises: any[] = [];
    // push the returned promise of each loadScript call
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    // return promise.all that resolves when all promises are resolved
    return Promise.all(promises);
}

loadScript(name: string) {
  return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scripts[name].loaded) {
          resolve({ script: name, loaded: true, status: 'Already Loaded' });
      } else {
          // load script
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.id = name + 'dynamic_script';
          script.src = this.scripts[name].src;

          if (name == 'bootstrap') {
             //script.defer = true;
             script.integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
             script.crossOrigin="anonymous"
         }

          // cross browser handling of onLoaded event
          if (document.getElementById(name + 'dynamic_script') == null) {  // IE
              script.onload = () => {
                  this.scripts[name].loaded = true;
                  resolve({ script: name, loaded: true, status: 'Loaded' });
              };
          } else {  // Others
              script.onload = () => {
                  this.scripts[name].loaded = true;
                  resolve({ script: name, loaded: true, status: 'Loaded' });
              };
          }
          script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
          // finally append the script tag in the DOM
          document.getElementsByTagName('head')[0].appendChild(script);
      }
  });
}




public loadExternalStyles(styleUrl: string,integrity?:string,crossorigin?:string) {
  return new Promise((resolve, reject) => {
      if (document.getElementById(styleUrl + "_style") == null) {
          const styleLink = document.createElement('link');
          styleLink.rel = 'stylesheet';
          styleLink.href = styleUrl;
          styleLink.id = styleUrl + "_style";
          styleLink.type = 'text/css';
          if(integrity){
            styleLink.integrity=integrity;
          }
          if(crossorigin){
            styleLink.crossOrigin=crossorigin;
          }
          let bootstrapfer:any = document.getElementsByTagName('link')[0];
          bootstrapfer.parentNode.insertBefore(styleLink, bootstrapfer);
      }


  });
}


}
