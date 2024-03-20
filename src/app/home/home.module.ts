import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EducationPageComponent } from './pages/education-page/education-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    HomePageComponent,
    HomeLayoutPageComponent,
    EducationPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterLink,
    SharedModule,
    PrimeNGModule,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    HomePageComponent,
    HomeLayoutPageComponent,
    EducationPageComponent
  ]
})
export class HomeModule { }
