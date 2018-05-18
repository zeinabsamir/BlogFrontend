import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { ArticleAddEditComponent } from './article/article-add-edit/article-add-edit.component';
import { ArticleBodyComponent } from './article/article-body/article-body.component';
import { ArticlesComponent } from './article/articles/articles.component';
import { ArticlesPageComponent } from './article/articles-page/articles-page.component';


export const rootRouting: ModuleWithProviders = RouterModule.forRoot([
    {
      path: '',
      component: HomePageComponent
    },
    {
        path: 'articles/create',
        component: ArticleAddEditComponent
    },
    {
        path: 'articles',
        component: ArticlesPageComponent
    },
    {
        path: 'article/:articleId',
        component: ArticleBodyComponent
    },
    {
        path: 'articles/:articleId/edit',
        component: ArticleAddEditComponent
    },
  ]);
