import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { ArticleService } from '../core/article.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ArticlesComponent,
    ArticleBodyComponent
  ],
  providers: [ ArticleService],
  declarations: [ArticlesComponent, ArticleBodyComponent]
})
export class ArticleModule { }
