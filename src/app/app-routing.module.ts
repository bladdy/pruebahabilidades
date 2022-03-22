import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'favorites', component: FavoriteComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}