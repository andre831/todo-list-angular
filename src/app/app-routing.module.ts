import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './view/home/home.component';
import { DocumentComponent } from './view/document/document.component';

const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'document/:id',
    title: `Task`,
    component: DocumentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  id!: string;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];

      return this.id;
    });
  }
}
