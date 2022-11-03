import { LoginComponent } from './components/login/login/login.component';
import { ListarFormaturaComponent } from './components/formaturas/listar-formatura/listar-formatura.component';
import { ListarConvidadoComponent } from './components/convidados/listar-convidado/listar-convidado.component';
import { CadastrarFormaturaComponent } from './components/formaturas/cadastrar-formatura/cadastrar-formatura.component';
import { CadastrarConvidadoComponent } from './components/convidados/cadastrar-convidado/cadastrar-convidado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'cadastrarConvidado',
    component:CadastrarConvidadoComponent
  },
  {
    path:'listarConvidado',
    component:ListarConvidadoComponent
  },
  {
    path:'cadastrarFormatura',
    component:CadastrarFormaturaComponent
  },
  {
    path:'listarFormatura',
    component:ListarFormaturaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
