import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { FormsModule }from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarinicioComponent } from './components/navbarinicio/navbarinicio.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { FuncionesComponent } from './components/funciones/funciones.component'


@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarinicioComponent,
    AcercaComponent,
    FuncionesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
