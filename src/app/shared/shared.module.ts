import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BannerComponent } from '../component/banner/banner.component';
import { LogoComponent } from '../component/logo/logo.component';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { SearchComponent } from '../component/search/search.component';
import { HomeComponent } from '../page/home/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
  ],
  declarations: [
    BannerComponent,
    SearchComponent,
    LogoComponent,
    NavbarComponent,
    HomeComponent
  ],

  exports: [
    CommonModule,
    ButtonModule,
    BannerComponent,
    SearchComponent,
    LogoComponent,
    NavbarComponent,
    HomeComponent
  ]
})
export class SharedModule { }
