import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarConvidadoComponent } from './components/convidados/cadastrar-convidado/cadastrar-convidado.component';
import { ListarConvidadoComponent } from './components/convidados/listar-convidado/listar-convidado.component';
import { CadastrarFormaturaComponent } from './components/formaturas/cadastrar-formatura/cadastrar-formatura.component';
import { ListarFormaturaComponent } from './components/formaturas/listar-formatura/listar-formatura.component';
import { LoginComponent } from './components/login/login/login.component';
import { MenuComponent } from './components/components/menu/menu.component';
import { FormaturaComponent } from './components/formaturas/formatura/formatura.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarConvidadoComponent,
    ListarConvidadoComponent,
    CadastrarFormaturaComponent,
    ListarFormaturaComponent,
    LoginComponent,
    MenuComponent,
    FormaturaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
