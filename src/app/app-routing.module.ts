import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorComponent } from './sector/sector.component';
import { SectionComponent } from './section/section.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'sector',
    component: SectorComponent,
  },
  {
    path: 'section',
    component: SectionComponent,
  },
  {
    path: 'department',
    component: DepartmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
