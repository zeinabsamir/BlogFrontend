import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleModule } from '../article/article.module';

@NgModule({
  imports: [
    CommonModule,
    ArticleModule
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
