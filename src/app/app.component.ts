import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

import AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  ngOnInit(){
    
  }
  


  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    if (isPlatformBrowser(this.platformId)) { AOS.init({ once: true, duration: 1000 }); }
  }

}
