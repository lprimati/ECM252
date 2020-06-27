import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent {

  @Output() cursoAdicionado = new EventEmitter();

  adicionar(nome, desc, duracao) {
    const curso = {
      nome: nome,
      desc: desc,
      duracao: duracao,
      urlImagem: "https://picsum.photos/600/220"
    };
    this.cursoAdicionado.emit(curso);
  }
}
