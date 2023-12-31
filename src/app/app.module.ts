import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaAdministracionComponent } from './categoria-admministracion/categoria-admministracion.component';
import { PacientesDoctoresComponent } from './pacientes-doctores/pacientes-doctores/pacientes-doctores.component';
import { ReservaTurnosComponent } from './reserva-turnos/reserva-turnos.component';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriaAdministracionComponent,
    PacientesDoctoresComponent,
    ReservaTurnosComponent,
    FichaClinicaComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Agrega FormsModule aquí
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
