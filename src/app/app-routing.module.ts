import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaAdministracionComponent } from './categoria-admministracion/categoria-admministracion.component';
import { PacientesDoctoresComponent } from './pacientes-doctores/pacientes-doctores/pacientes-doctores.component';
import { ReservaTurnosComponent } from './reserva-turnos/reserva-turnos.component';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
const routes: Routes = [
  { path: '', redirectTo: '/registroPersonas', pathMatch: 'full' },
  { path: 'registroPersonas', component: PacientesDoctoresComponent },

  { path: 'categorias', component: CategoriaAdministracionComponent },
  // Otras rutas...

  { path: 'reserva', component: ReservaTurnosComponent },
  { path: 'ficha', component: FichaClinicaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
