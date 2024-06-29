import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';

const routes: Routes = [
  {
    path : '', component : WelcomeComponent
  },
  {
    path : 'albums', component : AlbumsListComponent
  },
  {
    path : 'albums/album/:albumId', component : CardsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
