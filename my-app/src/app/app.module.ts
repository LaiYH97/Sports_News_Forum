import { routing } from './app.routes';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {BasketballComponent} from './basketball/basketball.component';
import {FootballComponent} from './football/football.component';
import {CommunityComponent} from './community/community.component';
import {HomepageComponent} from './homepage/homepage.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { KSSwiperModule} from 'angular2-swiper';
import { BasketballSwiperComponent } from './basketball-swiper/basketball-swiper.component';
import { FootballSwiperComponent } from './football-swiper/football-swiper.component';
import { FilterPipe } from './filter.pipe';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BasketballComponent,
    FootballComponent,
    CommunityComponent,
    HomepageComponent,
    FooterComponent,
    BasketballSwiperComponent,
    FootballSwiperComponent,
    FilterPipe,
    PageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    KSSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

