import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './components/contentt/articles/articles.component';
import { KnowledgeCenterComponent } from './components/contentt/knowledge-center/knowledge-center.component';


const routes: Routes = [
  {path :'', redirectTo:'/main' ,pathMatch:'full'},
{path :'main', component: KnowledgeCenterComponent },
{path : 'articles' ,component:ArticlesComponent},
// {path :"**" ,component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[KnowledgeCenterComponent,ArticlesComponent,]