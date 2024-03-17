import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { EducationPageComponent } from './pages/education-page/education-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutPageComponent,
    children: [
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'work-experience', title: 'Work Experience', component: AboutPageComponent
      },
      {
        path: 'contact-me', title: 'Contact Me', component: ContactPageComponent
      },
      {
        path: 'projects', title: 'My Projects', component: ProjectsPageComponent
      },
      {
        path: 'skills', title: 'My Skills', component: SkillsPageComponent
      },
      {
        path: 'education', title: 'Education', component: EducationPageComponent
      },
      {
        path: '**', redirectTo: '', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
