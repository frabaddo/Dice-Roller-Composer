import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'make-roll',
        children:[
          {
            path: '',
            loadChildren: () => import('../make-roll/make-roll.module').then( m => m.MakeRollPageModule)
          }
        ]
      },
      {
        path: 'rolls-history',
        children:[
          {
            path: '',
            loadChildren: () => import('../rolls-history/rolls-history.module').then( m => m.RollsHistoryPageModule)
          }
        ]
      },
      {
        path: 'favorites',
        children:[
          {
            path: '',
            loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
          },
          {
            path: 'modify-favorite/:id',
            loadChildren: () => import('../modify-favorite/modify-favorite.module').then( m => m.ModifyFavoritePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/make-roll',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/make-roll',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
