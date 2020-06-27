import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfessoresComponent } from './professores/professores.component';
import { CursoCartaoComponent } from './curso-cartao/curso-cartao.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { AlunoCartaoComponent } from './aluno-cartao/aluno-cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfessoresComponent,
    CursoCartaoComponent,
    CursoCadastroComponent,
    FormAlunoComponent,
    AlunoCartaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
