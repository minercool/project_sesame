import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './user/list-users/list-users.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'list-users' , component : ListUsersComponent},
  {path : 'create-user' , component : CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
