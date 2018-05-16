import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';


export const rootRouting: ModuleWithProviders = RouterModule.forRoot([
    {
      path: '',
      component: HomePageComponent
    }
  ]);
