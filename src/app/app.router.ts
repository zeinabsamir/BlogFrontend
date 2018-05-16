import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';
import { ArticleAddEditComponent } from './article/article-add-edit/article-add-edit.component';


export const rootRouting: ModuleWithProviders = RouterModule.forRoot([
    {
      path: '',
      component: HomePageComponent
    },
    {
        path: 'articles/create',
        component: ArticleAddEditComponent
    }
  ]);
