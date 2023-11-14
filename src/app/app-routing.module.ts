import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { FoldersComponent } from './components/folders/folders.component';
import { WeatherComponent } from './components/weather/weather.component';
import { PostComponent } from './components/post/post.component';
const routes: Routes = [
  {
    path:'folder', component:FoldersComponent
  },
  {
    path:'todos', component:TodosComponent
  },
  {
    path:'weather', component:WeatherComponent
  },
  {
    path:'post', component:PostComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FoldersComponent,TodosComponent, WeatherComponent, PostComponent]