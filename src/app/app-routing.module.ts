import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListmachineComponent } from './listmachine/listmachine.component';

const routes: Routes = [
  { path: '', component: ListmachineComponent },
  { path: 'formulaire', component: FormComponent },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
