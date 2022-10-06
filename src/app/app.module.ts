import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MascotaPrincipalComponent } from './Mascotas/mascota-principal/mascota-principal.component';
import { MascotaRegistroComponent } from './Mascotas/mascota-registro/mascota-registro.component';

@NgModule({
  declarations: [
    AppComponent,

    MascotaPrincipalComponent,
    MascotaRegistroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
