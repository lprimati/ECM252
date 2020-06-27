import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-cartao',
  templateUrl: './curso-cartao.component.html',
  styleUrls: ['./curso-cartao.component.css']
})
export class CursoCartaoComponent {
  @Input() curso;
}
