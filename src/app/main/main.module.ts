import { NgModule } from '@angular/core';
import { MainService } from './main.service';
import { CommonModule } from '@angular/common';
import { MainResolver } from './main.resolver';
import { MainComponent } from './main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import {
  MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule,
  MatTableModule
} from '@angular/material';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NgxPaginationModule } from "ngx-pagination";

const routes: Routes = [
  { path: '', component: MainComponent, resolve: { value: MainResolver } },
];

@NgModule({
  declarations: [
    ListComponent,
    MainComponent,
    SearchComponent,
    JwPaginationComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MainService,
    MainResolver
  ]
})
export class MainModule { }
