<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/ciencia-da-computacao">Ciência da Computação</a></h3>


<font size="+12"><center>
<h1>Escola Infinito: Sistema de Presença</h1>
</center></font>

**Conteúdo**

- [Autores](#autores)
- [Descrição do projeto](#descrição-do-projeto)
- [Análise de requisitos funcionais e não-fucionais](#análise-de-requisitos-funcionais-e-não-funcionais)
- [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
- [Descrição dos casos de uso](#descrição-dos-casos-de-uso)
- [Diagrama de senquencia](#diagramas-de-sequência)
- [Diagrama de classes](#diagrama-de-classes)
- [Diagrama de componentes](#diagrama-de-componentes)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-implantação)
- [Referências](#referências)


# Autores

* Diogo Lourenzon Hatz
* Leila Akina Ino
* Livia Alabarse dos Santos

# Descrição do projeto

*Este projeto consiste na implementação de um sistema para controlor a preseça de alunos de uma escola que possui múltiplas turmas do Ensino Fundamental I. Esse sistema possui como usuário principal os professores do instituto de ensino Inifinito, o qual leva em consideração as eventuais necessidades de acessibilidade de seus docentes. Ademais, por se tratar de uma atividade rotineira acadêmica dos docentes, o sistema implementado deve ser intuitivo e cumprir com seu papel fundamental sem complicações*

<hr>

# Análise de requisitos funcionais e não-funcionais

<h3>Requisitos funcionais:</h3>

<ol>
<li>Realizar a chamada de todas as turmas em dois momentos do dia</li>
<li>Gerar relatórios de faltas agrupados por data, ano do ensino, turma, professor, disciplina ou aluno</li>
<li>Enviar notificações por e-mail para pais ou responsáveis nos casos em que o comparecimento às aulas dadas até o momento estiverem abaixo de 80%</li>
<li>Acessibilidade: tamanho de fonte ajustável, dentre outros</li>
<li>Reprovar os alunos com mais de 25% de faltas do total de aulas ministradas</li>
</ol>

<h3>Requisitos não-funcionais:</h3>

<ol>
<li>O sistema deve ser implementado em web: HTML, CSS e JS</li>
<li>O sistema deve permitir múltiplos acessos simultâneos</li>
<li>O sistema deve ser compatível com todos os navegadores web</li>
<li>O sistema deve ser compatível com dispositivos móveis</li>
<li>O sistema deve se comunicar com um banco de dados</li>
<li>O usuário deve escolher uma senha com no mínimo 6 caracteres alfanuméricos, contendo peolo menos 1 letra maiúscula e 1 caractere especial</li>
<li>O sistema semanalmente verificará de forma automática as porcentagens de comparecimento a partir de um relatório individual gerado e enviará uma notificação aos pais caso o comparecimento esteja abaixo de 80%. Essa verificação ocorrerá de sabádo.</li>
</ol>

<hr>

# Diagrama de casos de uso

<img src="https://raw.githubusercontent.com/lihviaa/UML-Classroom-FCI/master/src/CasosDeUso.png" alt="Diagrama de casos de uso" width=800px>

<hr>

# Descrição dos casos de uso
<h2>Caso do Uso: Fazer a Chamada</h2>
<ul>
  <li><b>Descrição Geral:</b> O professor deseja realizar a chamada de uma determinada turma<br></li>
  <li><b>Atores:</b> Professor<br></li>
  <li><b>Pré-Condição:</b> O professor deve realizar login no sistema<br></li>
  <li><b>Pós-Condição:</b> A chamada é feita e enviada para o banco de dados<br></li>
  <li><b>Fluxo Básico (Professor deseja realizar a chamada)</b></li>
  <ol>
    <li>(Opcional) Professor seleciona o ícone de acessibilidade e altera o tamanho da fonte</li>
    <li>Professor seleciona a opção de fazer a chamada</li>
    <li>Professor faz a chamada e envia o resultado ao banco de dados</li>
  </ol>
</ul>

<hr>

<h2>Caso do Uso: Gerar Relatórios de Faltas</h2>
<ul>
  <li><b>Descrição Geral:</b> O professor deseja gerar relatórios de faltas com determinado critério de agrupamento<br></li>
  <li><b>Atores:</b> Professor<br></li>
  <li><b>Pré-Condição:</b> O professor deve realizar login no sistema<br></li>
  <li><b>Pós-Condição:</b> O relatório é gerado<br></li>
  <li><b>Fluxo Básico (Professor deseja gerar relatório de faltas)</b></li>
  <ol>
    <li>(Opcional) Professor seleciona o ícone de acessibilidade e altera o tamanho da fonte</li>
    <li>Professor seleciona a opção de gerar relatórios</li>
    <li>Professor seleciona o critério de agrupamento do relatório</li>
    <li>Sistema gera o relatório</li>
  </ol>
</ul>

<hr>

<h2>Caso do Uso: Verificar porcentagem de presença</h2>
<ul>
  <li><b>Descrição Geral:</b> O sistema verifica a porcentagem de comparecimento e notifica os pais caso a porcentagem esteja abaixo de 80%<br></li>
  <li><b>Atores:</b> Pais e responsáveis<br></li>
  <li><b>Pré-Condição:</b>Ser sábado<br></li>
  <li><b>Pós-Condição:</b> Nada ou notificação aos pais e responsáveis<br></li>
  <li><b>Fluxo Básico (Verificar porcentagem de comparecimento)</b></li>
  <ol>
    <li>Sistema gera um relatório para cada aluno</li>
    <li>Sistema verifica a falta do aluno</li>
  </ol>

  <li><b>Fluxo Alternativo (Uma notificação é enviada aos responsáveis de alunos com excesso de faltas)</b></li>
  <ol>
    <li>Sistema gera um relatório para cada aluno</li>
    <li>Sistema verifica a falta do aluno</li>
    <li>E-mail é enviado aos responsáveis dos alunos com excesso de faltas</li>
  </ol>
</ul>

<hr>

# Diagramas de sequência

<h2>Diagrama relativo ao caso de uso Fazer Chamada:</h2>
<img src = "https://raw.githubusercontent.com/lihviaa/UML-Classroom-FCI/master/src/DS-FazerChamada.png" alt="Diagrama de sequência Fazer Chamada" width=800px>
<hr>

<h2>Diagrama relativo ao caso de uso Gerar Relatório:</h2>
<img src = "https://raw.githubusercontent.com/lihviaa/UML-Classroom-FCI/master/src/DS-GerarRelat%C3%B3rio.png" alt="Diagrama de sequência Gerar Relatório" width=800px>
<hr>

<h2>Diagrama relativo ao caso de uso Verificar Porcentagem de Faltas:</h2>
<img src = "https://raw.githubusercontent.com/lihviaa/UML-Classroom-FCI/master/src/DS-VerificarPorcentagem.png" width=800px>
<hr>

# Diagrama de classes

<img src = "https://raw.githubusercontent.com/lihviaa/UML-Classroom-FCI/master/src/DC.png" alt = "Diagrama de classes" width=600px>
<hr>

# Diagrama de Componentes

<img src = "https://github.com/lihviaa/UML-Classroom-FCI/blob/master/src/DiagramaComponentes.png" alt = "Diagrama de Componentes">
<hr>

# Decisões de arquitetura

Descrever a infraestrutura escolhida para arquitetura do projeto

# Diagrama de implantação

Diagrama para exibir o relacionamento de hardware e software no projeto

# Referências

<ul>
  <li>Material disponibilizado na plataforma de ensino Moodle da disciplina de Projeto de Software</li>
  <li>https://www.lucidchart.com/pages/pt/diagrama-de-caso-de-uso-uml, acessado em 31 de ago. de 2023</li>
  <li>https://www.mestresdaweb.com.br/tecnologias/requisitos-funcionais-e-nao-funcionais-o-que-sao, acessado em 31 de ago. de 2023</li>
  <li>https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-sequencia-uml, acessado em 13 de ago. de 2023</li>
</ul>
