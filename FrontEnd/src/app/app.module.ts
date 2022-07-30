import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componenets/header/header.component';
import { BannerComponent } from './componenets/banner/banner.component';
import { AcercaDeComponent } from './componenets/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componenets/experiencia/experiencia.component';
import { EducacionComponent } from './componenets/educacion/educacion.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
// ---
import { HysComponent } from './componenets/hys/hys.component';
import { ProyectosComponent } from './componenets/proyectos/proyectos.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './componenets/footer/footer.component';
import { HomeComponent } from './componenets/home/home.component';
import { LoginComponent } from './componenets/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
