import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { ResetaccountComponent } from './resetaccount/resetaccount.component';

// Define your routes here
const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'mains', component:MainpageComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'reset', component:ResetaccountComponent}
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
