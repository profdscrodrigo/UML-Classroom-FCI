<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/ciencia-da-computacao">Ciência da Computação</a></h3>


<font size="+12"><center>
<h1>Escola Infinito: Sistema de Presença</h1>
</center></font>

>*Observação 1: A estrutura inicial deste documento é só um exemplo. O seu grupo deverá alterar esta estrutura de acordo com o que está sendo solicitado na disciplina.*

>*Observação 2: O índice abaixo não precisa ser editado se você utilizar o Visual Studio Code com a extensão **Markdown All in One**. Essa extensão atualiza o índice automaticamente quando o arquivo é salvo.*

**Conteúdo**

- [Autores](#nome-aluno)
- [Descrição do projeto](#introdução-do-projeto)
- [Análise de requisitos funcionais e não-fucionais](#descrição-dos-requisitos)
- [Diagrama de casos de uso](#diagrama-de-comportamento-atores)
- [Descrição dos casos de uso](#descrição-das-funcões)
- [Diagrama de senquencia](#diagrama-de-ordem-interações)
- [Diagrama de classes](#diagrama-orientado-objetos)
- [Diagrama de componentes](#diagrama-estrutura-componente)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-hardware-software)
- [Referências](#referências)


# Autores

* Diogo Lourenzon Hatz
* Leila Akina Ino
* Livia Alabarse dos Santos

# Descrição do projeto

*Este projeto consiste na implementação de um sistema para controlor a preseça de alunos de uma escola que possui múltiplas turmas do Ensino Fundamental I. Esse sistema possui como usuário principal os professores do instituto de ensino Inifinito, o qual leva em consideração as eventuais necessidades de acessibilidade de seus docentes. Ademais, por se tratar de uma atividade rotineira acadêmica dos docentes, o sistema implementado deve ser intuitivo e cumprir com seu papel fundamental sem complicações*

# Análise de requisitos funcionais e não-funcionais

<h3>Requisitos funcionais:</h3>

<ol>
<li>Realizar a chamada de todas as turmas em dois momentos do dia</li>
<li>Gerar relatórios de faltas agrupados por data, ano do ensino, turma, professor, disciplina ou aluno</li>
<li>Enviar notificações por e-mail para pais ou responsáveis nos casos em que o comparecimento às aulas dadas até o momento estiverem abaixo de 80%</li>
<li>Acessibilidade: tamanho de fonte ajustável, dentre outros</li>
<li>Reprovar os alunos com mais de 25% de faltas do total de aulas ministradas</li>
<li></li>
<li></li>
<li></li>
</ol>

<h3>Requisitos não-funcionais:</h3>

<ol>
<li>O sistema deve ser implementado em web: HTML, CSS e JS</li>
<li>O sistema deve permitir múltiplos acessos simultâneos</li>
<li>O sistema deve ser compatível com todos os navegadores web</li>
<li>O sistema deve ser compatível com dispositivos móveis</li>
<li>O sistema deve se comunicar com um banco de dados</li>
<li>O usuário deve escolher uma senha com no mínimo 6 caracteres alfanuméricos, contendo peolo menos 1 letra maiúscula e 1 caractere especial.</li>
</ol>

# Diagrama de casos de uso

<img src="https://github.com/lihviaa/UML-Classroom-FCI/blob/Branch-Diogo/src/Diagrama%20de%20casos%20de%20uso.png" alt="Diagrama de casos de uso">

# Descrição dos casos de uso
<h2>Caso do Uso: Fazer a Chamada</h2>
<b>Descrição Geral:</b> O professor deseja realizar a chamada de uma determinada turma<br>
<b>Atores:</b> Professor<br>
<b>Pré-Condição:</b> O professor deve realizar login no sistema<br>
<b>Pós-Condição:</b> A chamada é feita e enviada para o banco de dados<br>
<b>Fluxo Básico (Professor deseja realizar a chamada)</b>
<ol>
  <li>(Opcional) Professor seleciona o ícone de acessibilidade e altera o tamanho da fonte</li>
  <li>Professor seleciona a opção de fazer a chamada</li>
  <li>Professor faz a chamada e envia o resultado</li>
</ol>

<hr>

<h2>Caso do Uso: Gerar Relatórios de Faltas</h2>
<b>Descrição Geral:</b> O professor deseja gerar relatórios de faltas com determinado critério de agrupamento<br>
<b>Atores:</b> Professor<br>
<b>Pré-Condição:</b> O professor deve realizar login no sistema<br>
<b>Pós-Condição:</b> O relatório é gerado<br>
<b>Fluxo Básico (Professor deseja gerar relatório de faltas)</b>
<ol>
  <li>(Opcional) Professor seleciona o ícone de acessibilidade e altera o tamanho da fonte</li>
  <li>Professor seleciona a opção de gerar relatórios</li>
  <li>Professor seleciona o critério de agrupamento do relatório</li>
  <li>Sistema gera o relatório</li>
</ol>

<b>Fluxo Alternativo (Uma notificação é enviada aos responsáveis de alunos com excesso de faltas)</b>
<ol>
  <li>(Opcional) Professor seleciona o ícone de acessibilidade e altera o tamanho da fonte</li>
  <li>Professor seleciona a opção de gerar relatórios</li>
  <li>Professor seleciona o critério de agrupamento do relatório</li>
  <li>Professor digita a informação relativa ao critério selecionado</li>
  <li>Professor gera o relatório</li>
  <li>E-mail é enviado aos responsáveis dos alunos com excesso defaltas</li>
</ol>

# Diagrama de sequencia

*&lt;Diagrama de ordem e interação dos objetos&gt;*

# Diagrama de classes

*&lt;Diagrama de relacionamento entre classes para os seus atributos e operações&gt;*

# Diagrama de Componentes

*&lt;Diagrama para exibir a relação estrutural dos componentes de um sistema de software

# Decisões de arquitetura

*&lt;Descrever a infraestrutura escolhida para arquitetura do projeto&gt;*

# Diagrama de implantação

*&lt;Diagrama para exibir o relacionamento de hardware e software no projeto&gt;*

# Referências

*&lt;Lista de referências&gt;*
<ul>
  <li>https://www.lucidchart.com/pages/pt/diagrama-de-caso-de-uso-uml</li>
</ul>
