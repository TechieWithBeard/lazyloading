import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-click-load-page',
  templateUrl: './click-load-page.component.html',
  styleUrls: ['./click-load-page.component.scss']
})
export class ClickLoadPageComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  navigate(category:string){

    if(category=="d3chart")
    {
      this.route.navigate(['/dynaload']);
    }
    else if("bootstrap"){
      this.route.navigate(['/loadBootstrap']);
    }


  }

}
