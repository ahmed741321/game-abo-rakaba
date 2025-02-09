import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartComponent } from './pages/start/start.component';
import { HomeComponent } from './pages/home/home.component';
import { SongsComponent } from './pages/songs/songs.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { InfoComponent } from './pages/info/info.component';
import { GameComponent } from './pages/game/game.component';


export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'home', component: HomeComponent },
  { path: 'songs', component: SongsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'info', component: InfoComponent },
  { path: 'game', component: GameComponent },
  { path: '**', redirectTo: 'start' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
