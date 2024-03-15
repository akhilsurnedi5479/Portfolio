import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  enableSticky= false;
  enableTab= true;
  constructor(@Inject(DOCUMENT)private document:Document){

  }
  ngOnInit(): void {
    fromEvent(window,'scroll').pipe(throttleTime(100)).subscribe((event)=>{
      if(this.document.defaultView.scrollY >50){
        this.enableSticky = true;
        this.enableTab=false;
        console.log("position ",this.document.defaultView.scrollY);
      }
      
      else{
        this.enableSticky=false;
        this.enableTab=true;
        console.log("position ",this.document.defaultView.scrollY);
      }
      
      
    })
    
  }

}
