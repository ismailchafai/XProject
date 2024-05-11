
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {title: ''},
    children: [
      {
        path: '',
        redirectTo: 'redevable',
        pathMatch: 'full'
      },
    {
    path: 'redevable',
    children: [
      {
        path: '',
        loadComponent: () => import('./redevable/redevable-list/redevable-list.component').then(m => m.RedevableListComponent),
        data: {title: 'Redevable'}
      },
      {
        path: 'create',
        loadComponent: () => import('./redevable/redevable-create/redevable-create.component').then(m => m.RedevableCreateComponent),
        data: {title: 'Create Redevable'}
      },
      {
        path: 'update',
        loadComponent: () => import('./redevable/redevable-update/redevable-update.component').then(m => m.RedevableUpdateComponent),
        data: {title: 'update Redevable'}
      },
    ]
    },
    {
    path: 'locale',
    children: [
      {
        path: '',
        loadComponent: () => import('./locale/locale-list/locale-list.component').then(m => m.LocaleListComponent),
        data: {title: 'Locale'}
      },
      {
        path: 'create',
        loadComponent: () => import('./locale/locale-create/locale-create.component').then(m => m.LocaleCreateComponent),
        data: {title: 'Create Locale'}
      },
      {
        path: 'update',
        loadComponent: () => import('./locale/locale-update/locale-update.component').then(m => m.LocaleUpdateComponent),
        data: {title: 'update Locale'}
      },
    ]
    },
    {
    path: 'rue',
    children: [
      {
        path: '',
        loadComponent: () => import('./rue/rue-list/rue-list.component').then(m => m.RueListComponent),
        data: {title: 'Rue'}
      },
      {
        path: 'create',
        loadComponent: () => import('./rue/rue-create/rue-create.component').then(m => m.RueCreateComponent),
        data: {title: 'Create Rue'}
      },
      {
        path: 'update',
        loadComponent: () => import('./rue/rue-update/rue-update.component').then(m => m.RueUpdateComponent),
        data: {title: 'update Rue'}
      },
    ]
    },
    {
    path: 'quartier',
    children: [
      {
        path: '',
        loadComponent: () => import('./quartier/quartier-list/quartier-list.component').then(m => m.QuartierListComponent),
        data: {title: 'Quartier'}
      },
      {
        path: 'create',
        loadComponent: () => import('./quartier/quartier-create/quartier-create.component').then(m => m.QuartierCreateComponent),
        data: {title: 'Create Quartier'}
      },
      {
        path: 'update',
        loadComponent: () => import('./quartier/quartier-update/quartier-update.component').then(m => m.QuartierUpdateComponent),
        data: {title: 'update Quartier'}
      },
    ]
    },
    {
    path: 'secteur',
    children: [
      {
        path: '',
        loadComponent: () => import('./secteur/secteur-list/secteur-list.component').then(m => m.SecteurListComponent),
        data: {title: 'Secteur'}
      },
      {
        path: 'create',
        loadComponent: () => import('./secteur/secteur-create/secteur-create.component').then(m => m.SecteurCreateComponent),
        data: {title: 'Create Secteur'}
      },
      {
        path: 'update',
        loadComponent: () => import('./secteur/secteur-update/secteur-update.component').then(m => m.SecteurUpdateComponent),
        data: {title: 'update Secteur'}
      },
    ]
    },
    {
    path: 'ville',
    children: [
      {
        path: '',
        loadComponent: () => import('./ville/ville-list/ville-list.component').then(m => m.VilleListComponent),
        data: {title: 'Ville'}
      },
      {
        path: 'create',
        loadComponent: () => import('./ville/ville-create/ville-create.component').then(m => m.VilleCreateComponent),
        data: {title: 'Create Ville'}
      },
      {
        path: 'update',
        loadComponent: () => import('./ville/ville-update/ville-update.component').then(m => m.VilleUpdateComponent),
        data: {title: 'update Ville'}
      },
    ]
    },
    {
    path: 'categorie-locale',
    children: [
      {
        path: '',
        loadComponent: () => import('./categorie-locale/categorie-locale-list/categorie-locale-list.component').then(m => m.CategorieLocaleListComponent),
        data: {title: 'CategorieLocale'}
      },
      {
        path: 'create',
        loadComponent: () => import('./categorie-locale/categorie-locale-create/categorie-locale-create.component').then(m => m.CategorieLocaleCreateComponent),
        data: {title: 'Create CategorieLocale'}
      },
      {
        path: 'update',
        loadComponent: () => import('./categorie-locale/categorie-locale-update/categorie-locale-update.component').then(m => m.CategorieLocaleUpdateComponent),
        data: {title: 'update CategorieLocale'}
      },
    ]
    },
    {
    path: 'taxe-3-8',
    children: [
      {
        path: '',
        loadComponent: () => import('./taxe-3-8/taxe-3-8-list/taxe-3-8-list.component').then(m => m.Taxe38ListComponent),
        data: {title: 'Taxe38'}
      },
      {
        path: 'create',
        loadComponent: () => import('./taxe-3-8/taxe-3-8-create/taxe-3-8-create.component').then(m => m.Taxe38CreateComponent),
        data: {title: 'Create Taxe38'}
      },
      {
        path: 'update',
        loadComponent: () => import('./taxe-3-8/taxe-3-8-update/taxe-3-8-update.component').then(m => m.Taxe38UpdateComponent),
        data: {title: 'update Taxe38'}
      },
    ]
    },
    {
    path: 'trim',
    children: [
      {
        path: '',
        loadComponent: () => import('./trim/trim-list/trim-list.component').then(m => m.TrimListComponent),
        data: {title: 'Trim'}
      },
      {
        path: 'create',
        loadComponent: () => import('./trim/trim-create/trim-create.component').then(m => m.TrimCreateComponent),
        data: {title: 'Create Trim'}
      },
      {
        path: 'update',
        loadComponent: () => import('./trim/trim-update/trim-update.component').then(m => m.TrimUpdateComponent),
        data: {title: 'update Trim'}
      },
    ]
    },
    {
    path: 'locale-3-8-detail',
    children: [
      {
        path: '',
        loadComponent: () => import('./locale-3-8-detail/locale-3-8-detail-list/locale-3-8-detail-list.component').then(m => m.Locale38DetailListComponent),
        data: {title: 'Locale38Detail'}
      },
      {
        path: 'create',
        loadComponent: () => import('./locale-3-8-detail/locale-3-8-detail-create/locale-3-8-detail-create.component').then(m => m.Locale38DetailCreateComponent),
        data: {title: 'Create Locale38Detail'}
      },
      {
        path: 'update',
        loadComponent: () => import('./locale-3-8-detail/locale-3-8-detail-update/locale-3-8-detail-update.component').then(m => m.Locale38DetailUpdateComponent),
        data: {title: 'update Locale38Detail'}
      },
    ]
    },
    {
    path: 'taux-taxe-3-8',
    children: [
      {
        path: '',
        loadComponent: () => import('./taux-taxe-3-8/taux-taxe-3-8-list/taux-taxe-3-8-list.component').then(m => m.TauxTaxe38ListComponent),
        data: {title: 'TauxTaxe38'}
      },
      {
        path: 'create',
        loadComponent: () => import('./taux-taxe-3-8/taux-taxe-3-8-create/taux-taxe-3-8-create.component').then(m => m.TauxTaxe38CreateComponent),
        data: {title: 'Create TauxTaxe38'}
      },
      {
        path: 'update',
        loadComponent: () => import('./taux-taxe-3-8/taux-taxe-3-8-update/taux-taxe-3-8-update.component').then(m => m.TauxTaxe38UpdateComponent),
        data: {title: 'update TauxTaxe38'}
      },
    ]
    },
    {
    path: 'taxe-3-8-detail',
    children: [
      {
        path: '',
        loadComponent: () => import('./taxe-3-8-detail/taxe-3-8-detail-list/taxe-3-8-detail-list.component').then(m => m.Taxe38DetailListComponent),
        data: {title: 'Taxe38Detail'}
      },
      {
        path: 'create',
        loadComponent: () => import('./taxe-3-8-detail/taxe-3-8-detail-create/taxe-3-8-detail-create.component').then(m => m.Taxe38DetailCreateComponent),
        data: {title: 'Create Taxe38Detail'}
      },
      {
        path: 'update',
        loadComponent: () => import('./taxe-3-8-detail/taxe-3-8-detail-update/taxe-3-8-detail-update.component').then(m => m.Taxe38DetailUpdateComponent),
        data: {title: 'update Taxe38Detail'}
      },
    ]
    },
    {
    path: 'type-locale-3-8-detail',
    children: [
      {
        path: '',
        loadComponent: () => import('./type-locale-3-8-detail/type-locale-3-8-detail-list/type-locale-3-8-detail-list.component').then(m => m.TypeLocale38DetailListComponent),
        data: {title: 'TypeLocale38Detail'}
      },
      {
        path: 'create',
        loadComponent: () => import('./type-locale-3-8-detail/type-locale-3-8-detail-create/type-locale-3-8-detail-create.component').then(m => m.TypeLocale38DetailCreateComponent),
        data: {title: 'Create TypeLocale38Detail'}
      },
      {
        path: 'update',
        loadComponent: () => import('./type-locale-3-8-detail/type-locale-3-8-detail-update/type-locale-3-8-detail-update.component').then(m => m.TypeLocale38DetailUpdateComponent),
        data: {title: 'update TypeLocale38Detail'}
      },
    ]
    },
    {
    path: 'notification-retard-premier-niveau',
    children: [
      {
        path: '',
        loadComponent: () => import('./notification-retard-premier-niveau/notification-retard-premier-niveau-list/notification-retard-premier-niveau-list.component').then(m => m.NotificationRetardPremierNiveauListComponent),
        data: {title: 'NotificationRetardPremierNiveau'}
      },
      {
        path: 'create',
        loadComponent: () => import('./notification-retard-premier-niveau/notification-retard-premier-niveau-create/notification-retard-premier-niveau-create.component').then(m => m.NotificationRetardPremierNiveauCreateComponent),
        data: {title: 'Create NotificationRetardPremierNiveau'}
      },
      {
        path: 'update',
        loadComponent: () => import('./notification-retard-premier-niveau/notification-retard-premier-niveau-update/notification-retard-premier-niveau-update.component').then(m => m.NotificationRetardPremierNiveauUpdateComponent),
        data: {title: 'update NotificationRetardPremierNiveau'}
      },
    ]
    },
    {
    path: 'notification-retard-deuxieme-niveau',
    children: [
      {
        path: '',
        loadComponent: () => import('./notification-retard-deuxieme-niveau/notification-retard-deuxieme-niveau-list/notification-retard-deuxieme-niveau-list.component').then(m => m.NotificationRetardDeuxiemeNiveauListComponent),
        data: {title: 'NotificationRetardDeuxiemeNiveau'}
      },
      {
        path: 'create',
        loadComponent: () => import('./notification-retard-deuxieme-niveau/notification-retard-deuxieme-niveau-create/notification-retard-deuxieme-niveau-create.component').then(m => m.NotificationRetardDeuxiemeNiveauCreateComponent),
        data: {title: 'Create NotificationRetardDeuxiemeNiveau'}
      },
      {
        path: 'update',
        loadComponent: () => import('./notification-retard-deuxieme-niveau/notification-retard-deuxieme-niveau-update/notification-retard-deuxieme-niveau-update.component').then(m => m.NotificationRetardDeuxiemeNiveauUpdateComponent),
        data: {title: 'update NotificationRetardDeuxiemeNiveau'}
      },
    ]
    },
    {
    path: 'notification-retard-deuxieme-niveau-detail',
    children: [
      {
        path: '',
        loadComponent: () => import('./notification-retard-deuxieme-niveau-detail/notification-retard-deuxieme-niveau-detail-list/notification-retard-deuxieme-niveau-detail-list.component').then(m => m.NotificationRetardDeuxiemeNiveauDetailListComponent),
        data: {title: 'NotificationRetardDeuxiemeNiveauDetail'}
      },
      {
        path: 'create',
        loadComponent: () => import('./notification-retard-deuxieme-niveau-detail/notification-retard-deuxieme-niveau-detail-create/notification-retard-deuxieme-niveau-detail-create.component').then(m => m.NotificationRetardDeuxiemeNiveauDetailCreateComponent),
        data: {title: 'Create NotificationRetardDeuxiemeNiveauDetail'}
      },
      {
        path: 'update',
        loadComponent: () => import('./notification-retard-deuxieme-niveau-detail/notification-retard-deuxieme-niveau-detail-update/notification-retard-deuxieme-niveau-detail-update.component').then(m => m.NotificationRetardDeuxiemeNiveauDetailUpdateComponent),
        data: {title: 'update NotificationRetardDeuxiemeNiveauDetail'}
      },
    ]
    },
    {
    path: 'notification-retard-deuxieme-niveau-detail-type-3-8',
    children: [
      {
        path: '',
        loadComponent: () => import('./notification-retard-deuxieme-niveau-detail-type-3-8/notification-retard-deuxieme-niveau-detail-type-3-8-list/notification-retard-deuxieme-niveau-detail-type-3-8-list.component').then(m => m.NotificationRetardDeuxiemeNiveauDetailType38ListComponent),
        data: {title: 'NotificationRetardDeuxiemeNiveauDetailType38'}
      },
      {
        path: 'create',
        loadComponent: () => import('./notification-retard-deuxieme-niveau-detail-type-3-8/notification-retard-deuxieme-niveau-detail-type-3-8-create/notification-retard-deuxieme-niveau-detail-type-3-8-create.component').then(m => m.NotificationRetardDeuxiemeNiveauDetailType38CreateComponent),
        data: {title: 'Create NotificationRetardDeuxiemeNiveauDetailType38'}
      },
      {
        path: 'update',
        loadComponent: () => import('./notification-retard-deuxieme-niveau-detail-type-3-8/notification-retard-deuxieme-niveau-detail-type-3-8-update/notification-retard-deuxieme-niveau-detail-type-3-8-update.component').then(m => m.NotificationRetardDeuxiemeNiveauDetailType38UpdateComponent),
        data: {title: 'update NotificationRetardDeuxiemeNiveauDetailType38'}
      },
    ]
    },
    {
    path: 'notification-retard-troisieme-niveau',
    children: [
      {
        path: '',
        loadComponent: () => import('./notification-retard-troisieme-niveau/notification-retard-troisieme-niveau-list/notification-retard-troisieme-niveau-list.component').then(m => m.NotificationRetardTroisiemeNiveauListComponent),
        data: {title: 'NotificationRetardTroisiemeNiveau'}
      },
      {
        path: 'create',
        loadComponent: () => import('./notification-retard-troisieme-niveau/notification-retard-troisieme-niveau-create/notification-retard-troisieme-niveau-create.component').then(m => m.NotificationRetardTroisiemeNiveauCreateComponent),
        data: {title: 'Create NotificationRetardTroisiemeNiveau'}
      },
      {
        path: 'update',
        loadComponent: () => import('./notification-retard-troisieme-niveau/notification-retard-troisieme-niveau-update/notification-retard-troisieme-niveau-update.component').then(m => m.NotificationRetardTroisiemeNiveauUpdateComponent),
        data: {title: 'update NotificationRetardTroisiemeNiveau'}
      },
    ]
    },
    ]
  }
];

