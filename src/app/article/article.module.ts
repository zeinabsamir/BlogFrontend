import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { ArticleService } from '../core/article.service';
import { ArticleAddEditComponent } from './article-add-edit/article-add-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ArticlesComponent,
    ArticleBodyComponent
  ],
  providers: [ ArticleService],
  declarations: [ArticlesComponent, ArticleBodyComponent, ArticleAddEditComponent]
})
export class ArticleModule { }
