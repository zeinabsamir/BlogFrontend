import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { ArticleAddEditComponent } from './article/article-add-edit/article-add-edit.component';
import { ArticleBodyComponent } from './article/article-body/article-body.component';


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
        path: 'articles/:articleId',
        component: ArticleBodyComponent
    }
  ]);
