import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { CounterComponent } from './counter/counter.component';
import { GridComponent } from './grid/grid.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { HeaderComponent } from './header/header.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    CounterComponent,
    GridComponent,
    ContactComponent,
    FooterComponent,
    ShowcaseComponent,
    HeaderComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
