
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
// Carrousel
import { ImagesCarrouselComponent } from './images-carrousel/images-carrousel.component';
import { CarouselModule } from 'ngx-carousels';
import { SocialIconsComponent } from './social-icons/social-icons.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImagesCarrouselComponent,
    SocialIconsComponent,
    AboutMeComponent,
    FooterComponent,
    NavbarComponent,
    ContactUsComponent,
    RecommendationsComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
