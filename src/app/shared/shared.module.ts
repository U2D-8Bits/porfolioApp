import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    NavBarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    ErrorPageComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
