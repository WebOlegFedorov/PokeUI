import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleComponent } from './single.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleResolver } from './single.resolver';
import { MatButtonModule, MatDividerModule } from '@angular/material';

const routes: Routes = [
  { path: '', component: SingleComponent, resolve: { value: SingleResolver } },
];

@NgModule({
  declarations: [SingleComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    SingleResolver
  ]
})
export class SingleModule { }
