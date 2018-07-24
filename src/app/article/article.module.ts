import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleBodyComponent } from './article-body/article-body.component';
import { ArticleService } from '../core/article.service';
import { CommentService } from '../core/comment.service';
import { ArticleAddEditComponent } from './article-add-edit/article-add-edit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { CommentModule } from '../comment/comment.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    CommentModule
  ],
  exports: [
    ArticlesComponent,
    ArticleBodyComponent
  ],
  providers: [ ArticleService, CommentService ],
  declarations: [ArticlesComponent, ArticleBodyComponent, ArticleAddEditComponent, ArticlesPageComponent]
})
export class ArticleModule { }
