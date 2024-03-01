import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { FuncionesComponent } from './components/funciones/funciones.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'funciones', component: FuncionesComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirección a la ruta por defecto
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
