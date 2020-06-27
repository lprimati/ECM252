import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-aluno-cartao',
  templateUrl: './aluno-cartao.component.html',
  styleUrls: ['./aluno-cartao.component.css']
})
export class AlunoCartaoComponent {
  @Input() aluno;
}
