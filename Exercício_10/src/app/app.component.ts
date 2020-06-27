import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio';

  cursos = [
    {
      nome: "Administração",
      desc: "Se você pensa em ser um administrador de empresas, quer fundar sua própria empresa e ser um empreendedor, ou mesmo liderar equipes de ponta em uma grande corporação, o começo da sua trajetória passa pela Mauá. Estude Administração em uma instituição renomada no mercado, que obteve conceito máximo pelo reconhecimento do curso pelo MEC, além da possibilidade da dupla diplomação pelo acordo de cooperação com a De Montfort University na Inglaterra. Já imaginou? Você começa sua graduação aqui e pode terminar com um diploma duplo, com muita experiência internacional e com o inglês fluente, pronto para começar a trabalhar.",
      duracao: 4,
      urlImagem: "./assets/img/adm.jpg"
    },
    {
      nome: "Design",
      desc: "O curso de Design da Mauá, oferecido desde 2007, possui nota máxima no MEC, tem conquistado seu espaço no mundo acadêmico e já deixa sua marca de qualidade no mercado. Por meio de uma importante convivência com a tecnologia e os negócios, num ambiente bem estruturado,com professores comprometidos e bem preparados, apresenta um currículo arrojado e um projeto pedagógico atualizadíssimo; Vem formando Designers talentosos e atendendo às demandas do mercado.",
      duracao: 4,
      urlImagem: "./assets/img/design.jpg"
    },
    {
      nome: "Engenharia de Alimentos",
      desc: "Quer um curso de Engenharia de Alimentos que te ensina o conteúdo na prática durante toda a graduação? A Mauá oferece a melhor infraestrutura para você. A graduação em Engenharia de Alimentos da Mauá oferece um intenso programa prático que leva o aluno desde as primeiras séries para os laboratórios didáticos e de pesquisa e de processamento em pequena escala. O campus conta ainda com uma instalação semi-industrial capaz de simular a produção de diversos produtos, semelhante ao que fazem as indústrias de alimentos.",
      duracao: 5,
      urlImagem: "./assets/img/alimentos.jpg"
    },
    {
      nome: "Engenharia Civil",
      desc: "Quer fazer diferença no mercado e na sociedade sendo formado em Engenharia Civil? Conheça o curso da Mauá! O curso tem uma área de atuação ampla que exige do profissional uma formação diversificada e pronto para atender obras distintas: construção de edifícios de sistemas de saneamento básico para cidades, podendo trabalhar com arquitetos e ambientalistas em grandes construções.",
      duracao: 5,
      urlImagem: "./assets/img/civil.jpg"
    },
    {
      nome: "Engenharia da Computação",
      desc: "A Engenharia de Computação está presente em nosso dia a dia e nas mais diversas áreas: Educação, Indústrias, Redes de Comunicação e Dispositivos Móveis, Transportes, Entreterimento, entre outras. Essa diversidade de aplicações para o Engenheiro de Computação qualifica-o para atuar como desenvolvedor, engenheiro, empreendedor, executivo de grandes corporações.",
      duracao: 5,
      urlImagem: "./assets/img/computacao.jpg"
    },
    {
      nome: "Engenharia de Controle e Automação",
      desc: "Você está procurando uma graduação em Engenharia de Controle e Automação que o destaque no mercado de trabalho. Conheça o curso oferecido pela Mauá! A formação em Engenharia de Controle e Automação da Mauá prepara o aluno para o uso de máquinas e conhecimento sobre os processos de fabricação, da Engenharia Eletrônica e da Ciência da Computação, além das suas aplicações em controle de processos e automação industrial.",
      duracao: 5,
      urlImagem: "./assets/img/ca.jpg"
    },
    {
      nome: "Engenharia Elétrica",
      desc: "A Mauá oferece a seu aluno de Engenheira Elétrica uma formação que, além de fortemente alicerçada nos conceitos fundamentais da Engenharia, permeia e entrelaça as áreas de Conversão de Energia, Regulamentação, Proteção, Distribuição e Energias Alternativas. Embora científico e tecnológico, o curso de Engenharia Elétrica também dá aos seus alunos a base para um pensamento humanístico e social que faz do profissional um elemento de atuação diferenciada na sociedade.",
      duracao: 5,
      urlImagem: "./assets/img/eletrica.jpg"
    },
    {
      nome: "Engenharia Eletrônica",
      desc: "A Mauá oferece a seu aluno de Engenheira Eletrônica uma formação com base nos conceitos fundamentais da Engenharia com as áreas de Telecomunicações, Sistemas Computacionais, Embora científica e tecnológica, a formação também valoriza os aspectos humanísticos e sociais que tornam o profissional um elemento de atuação diferenciada para a sociedade.",
      duracao: 5,
      urlImagem: "./assets/img/eletronica.jpg"
    },
    {
      nome: "Engenharia Mecânica",
      desc: "A graduação em Engenharia Mecânica é uma das mais abrangentes modalidades da Engenharia. Ela trata de tudo o que se move, de brinquedos a fábricas (com tudo o que está dentro), passando por eletrodomésticos, embarcações, veículos etc. Além disso, ela trata de instalações de conversão de energia como hidroelétricas e termoelétricas, instalações de ar-condicionado, de geração de vapor e frigoríficas.",
      duracao: 5,
      urlImagem: "./assets/img/mecanica.jpg"
    },
    {
      nome: "Engenharia de Produção",
      desc: "Infraestrutura de ponta, profissionais reconhecidos num curso bem-conceituado. Essa é a graduação em Engenharia de Produção da Mauá, ideal para um futuro de sucesso!",
      duracao: 5,
      urlImagem: "./assets/img/producao.jpg"
    },
    {
      nome: "Engenharia Química",
      desc: "Essa é a área mais abrangente da Engenharia e compreende todas as etapas de criação, desenvolvimento, melhoramento e aplicação dos processos químicos e bioquímicos e dos seus o dimensionamento, a gestão, a operação e o controle de plantas industriais que realizam esses processos, incluindo a disposição e o tratamento de resíduos, o monitoramento e a redução de impactos ambientais e o controle de poluição ambiental (ar, água e solo).",
      duracao: 5,
      urlImagem: "./assets/img/quimica.jpg"
    }
  ]

  onAdicionarCurso(curso) {
    this.cursos = [curso, ...this.cursos];
  }

  alunos = [];

  onAdicionarAluno(aluno) {
    this.alunos = [aluno, ...this.alunos];
  }

}
