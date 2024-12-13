import { MainPageComponent } from '../main-page/main-page.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'microfrontend',
    loadChildren: () =>
      import('microfrontend/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: MainPageComponent,
  },
];
