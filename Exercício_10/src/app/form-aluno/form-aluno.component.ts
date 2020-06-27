import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.css']
})
export class FormAlunoComponent {

  @Output() alunoRegistrado = new EventEmitter();
  salvar(alunoForm) {
    const aluno = {
      nome: alunoForm.value.nome,
      idade: alunoForm.value.idade,
      email: alunoForm.value.email,
      curso: alunoForm.value.curso,
    }
    this.alunoRegistrado.emit(aluno)
  }
  cursos = ['Eng. da Computação', 'Eng. de Controle e Automação', 'Eng. de Alimentos', 'Eng. de Produção', 'Eng. Elétrica', 'Eng. Eletrônica', 'Eng. Civil', 'Eng. Mecânica', 'Eng. Química', 'Administração', 'Design'];

  obterEstilosForm() {
    return {
      marginBottom: '10px',
      padding: '5px',
      width: '100%'
    }
  }

}
