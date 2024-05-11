import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import {UserComponent} from "./views/pages/user/user.component";
import {PageAcceuilComponent} from "./page-acceuil/page-acceuil.component";

export const routes: Routes = [

  {path:'' , component: PageAcceuilComponent},
  {
    path: '',
    component: DefaultLayoutComponent,
    data: { title: 'Home' },
    children: [

// START MY ENTITIES ---------------------------------------------->
      {
        path: '',
        loadChildren: () => import('./views//routes').then((m) => m.routes)
      },
      {
        path: 'notification',
        loadComponent: () => import('./layout/notification/notification.component').then(m => m.NotificationComponent),
        data: {title: 'Notification page'}
      },{
        path: 'profile',
        loadComponent: () => import('./layout/profile/profile.component').then(m => m.ProfileComponent),
        data: {title: 'profile page'}
      },
      {path:'user' , component: UserComponent}
    ]
  },

/////////////////////////////////////////////////////////////////////////////////////7
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {title: 'Page 404'}
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {title: 'Page 500'}
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {title: 'Login Page'}
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {title: 'Register Page'}
  }, {
    path: 'notFound',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {title: 'Register Page'}
  },
  { path: '**', redirectTo: 'dashboard' }
];
