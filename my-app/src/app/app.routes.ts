import  { HomepageComponent } from "./homepage/homepage.component";
import  { FootballComponent } from "./football/football.component";
import  { CommunityComponent } from "./community/community.component";
import  { BasketballComponent } from "./basketball/basketball.component";
import  { Routes,RouterModule } from '@angular/router';
import  { ModuleWithProviders } from '@angular/core';

const appRoutes:Routes = [
  { path:'homepage',component:HomepageComponent },
  { path:'basketball',component:BasketballComponent },
  { path:'football',component:FootballComponent },
  { path:'community',component:CommunityComponent },
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
