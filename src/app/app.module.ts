import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {NgxTypedJsModule} from 'ngx-typed-js';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ResumeComponent,
    AboutComponent,
    HomeComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
