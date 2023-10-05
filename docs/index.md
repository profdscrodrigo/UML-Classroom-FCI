<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/ciencia-da-computacao">Ciência da Computação</a></h3>

<font size="+12"><center>*Escola INFINITO: Sistema de Presenças*</center></font>

**Conteúdo**

- [Autores](#autores)
- [Descrição do projeto](#descrição-do-projeto)
- [Análise de requisitos funcionais e não-funcionais](#análise-de-requisitos-funcionais-e-não-funcionais)
  - [Requisitos funcionais](#requisitos-funcionais)
  - [Requisitos não-funcionais](#requisitos-não-funcionais)
- [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
- [Descrição dos casos de uso](#descrição-dos-casos-de-uso)
  - [Caso de uso: Incluir/Excluir/Atualizar alunos, turmas, disciplinas, professores ou outros administradores](#caso-de-uso-incluirexcluiratualizar-alunos-turmas-disciplinas-professores-ou-outros-administradores)
  - [Caso de uso: Controle de presença em sala de aula](#caso-de-uso-controle-de-presença-em-sala-de-aula)
  - [Caso de uso: Gerar relatório de presença](#caso-de-uso-gerar-relatório-de-presença)
  - [Caso de uso: Verificar frequência do aluno](#caso-de-uso-verificar-frequência-do-aluno)
- [Diagrama de sequência](#diagrama-de-sequência)
- [Diagrama de classes](#diagrama-de-classes)
- [Diagrama de Componentes](#diagrama-de-componentes)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-implantação)
- [Referências](#referências)

<br>

# Autores
* Francesco Zangradi Coppola
* Jônatas Garcia de Oliveira
* Pedro Henrique Araujo Farias 

<br>

# Descrição do projeto
Este projeto tem como objetivo desenvolver um *software* capaz de documentar e controlar a presença dos alunos da Escola Infinito, uma vez que a operação é ainda realizada totalmente em papel. O projeto tratará dos requisitos funcionais e não funcionais, casos de uso e diagramas de sequência referentes ao sistema, de modo a garantir que a aplicação proposta execute corretamente as operações solicitadas.

<br>

# Análise de requisitos funcionais e não-funcionais
## Requisitos funcionais
- Incluir/Excluir/Alterar alunos;
- Incluir/Excluir/Alterar turmas;
- Incluir/Excluir/Alterar professores;
- Incluir/Excluir/Alterar administradores do sistema;
- Realizar controle de presença duas vezes por dia;
- Validar presença de 75% em todas as aulas do ano para cada um dos alunos;
- Notificar responsáveis em caso de faltas excessivas (taxa de comparecimento abaixo de 80%);
- Gerar relatórios de faltas sempre que requisitado, agrupando-os por data, ano do ensino, turma, professor, disciplina ou aluno.

## Requisitos não-funcionais
- Implementação *web* em HTML, CSS e JavaScript;
- Suporte e comunicação com um banco de dados;
- Suporte à simultaneidade de múltiplos acessos;
- Sistema de envio de *e-mails* notificando os responsáveis;
- Responsividade: suporte a qualquer navegador *web*, inclusive *mobile*;
- Usuários e alunos devem ser devidamente cadastrados de acordo com seu grau de privilégio no sistema;
- Atomicidade, consistência, isolamento e durabilidade das operações no banco de dados;
- Recursos de acessibilidade.

<br>

# Diagrama de casos de uso
<img src="../src/diagramacasosdeuso.png">

<br>

# Descrição dos casos de uso
## Caso de uso: Incluir/Excluir/Atualizar alunos, turmas, disciplinas, professores ou outros administradores
- **Descrição geral**: Deseja-se atualizar o banco de dados inserindo, removendo ou atualizando o estado de alunos, turmas, disciplinas, professores ou outros administradores.
- **Atores**: Administrador do sistema.
- **Pré-condição**: O administrador deve efetuar *login* no sistema.
- **Pós-condição**: O banco de dados do sistema é atualizado.
- **Fluxo básico de eventos (Administrador inclui/edita/remove um objeto)**:
  - Administrador insere/edita os dados do objeto, incluindo sua classificação (aluno, turma, disciplina, professor, administrador);
  - O sistema fornece uma visualização prévia das alterações realizadas;
  - O administrador confirma que as alterações devem ser realizadas;
  - Os dados são inseridos/removidos/atualizados no banco de dados;
- **Fluxo alternativo de eventos (Administrador não consegue incluir/editar/remover um objeto)**:
  - Administrador insere/edita os dados do objeto, incluindo sua classificação (aluno, turma, disciplina, professor, administrador);
  - O sistema fornece uma visualização prévia das alterações realizadas;
  - O administrador confirma que as alterações devem ser realizadas;
  - Ocorre uma falha e o sistema não é capaz de atualizar o banco de dados;
  - Notifica-se um erro de execução e a operação é encerrada;
  - O administrador deve executar a operação novamente.

## Caso de uso: Controle de presença em sala de aula
- **Descrição geral**: Deseja-se registrar a presença ou ausência de um aluno em sala de aula.
- **Atores**: Professor.
- **Pré-condição**: O professor deve efetuar *login* no sistema em um dia letivo.
- **Pós-condição**: O banco de dados é atualizado, registrando a presença ou ausência de um aluno.
- **Fluxo básico de eventos (Professor realiza controle de presença)**:
  - Professor seleciona a disciplina que está lecionando;
  - Professor seleciona a turma para a qual está lecionando a disciplina;
  - O sistema exibe uma lista de todos os alunos matriculados na turma;
  - O professor seleciona os alunos ausentes;
  - O sistema destaca os alunos ausentes em vermelho, de modo a certificar o professor de que estes terão ausência registrada;
  - O professor executa a opção de **Registrar Presença**;
  - O sistema exibe uma mensagem solicitando a confirmação da operação;
  - O professor confirma que a operação deve ser concluída e os dados registrados no banco de dados;
  - O sistema registra ausência e presença dos alunos.
- **Fluxo alternativo de eventos (Professor não consegue acessar a disciplina lecionada)**:
  - Professor seleciona a disciplina que está lecionando;
  - O sistema não consegue acessar as informações da disciplina no banco de dados;
  - Exibe-se a mensagem "Não há turmas matriculadas nesta disciplina";
  - O professor deve executar a operação novamente;
  - Caso persista o erro, deve-se acionar assistência técnica.
- **Fluxo alternativo de eventos (Professor não consegue acessar a turma em que leciona)**:
  - Professor seleciona a disciplina que está lecionando;
  - Professor seleciona a turma para a qual está lecionando a disciplina;
  - O sistema não consegue acessar as informações da turma;
  - Exibe-se a mensagem "Não há alunos matriculados nesta turma";
  - O professor deve executar a operação novamente;
  - Caso persista o erro, deve-se acionar assistência técnica.
- **Fluxo alternativo de eventos (Professor não consegue registrar presença)**:
  - Professor seleciona a disciplina que está lecionando;
  - Professor seleciona a turma para a qual está lecionando a disciplina;
  - O sistema exibe uma lista de todos os alunos matriculados na turma;
  - O professor seleciona os alunos ausentes;
  - O sistema destaca os alunos ausentes em vermelho, de modo a certificar o professor de que estes terão ausência registrada;
  - O professor executa a opção de **Registrar Presença**;
  - O sistema exibe uma mensagem solicitando a confirmação da operação;
  - O professor confirma que a operação deve ser concluída e os dados registrados no banco de dados;
  - O sistema não é capaz de atualizar o banco de dados com as alterações solicitadas;
  - Retorna-se uma mensagem de erro: "Não foi possível realizar chamada. Tente novamente";
  - O professor deve executar a operação novamente;
  - Caso persista o erro, deve-se acionar assistência técnica.

## Caso de uso: Gerar relatório de presença
- **Descrição geral**: Deseja-se gerar um relatório de presença de determinado aluno.
- **Atores**: Administrador do sistema.
- **Pré-condição**: O administrador deve efetuar *login* no sistema.
- **Pós-condição**: O relatório de presença será gerado.
- **Fluxo básico de eventos (O Administrador gera o relatório de presença de determinado aluno)**:
  - O administrador seleciona uma turma;
  - O sistema exibe a lista de alunos matriculados na turma;
  - O administrador seleciona um aluno específico;
  - O sistema exibe as informações cadastradas do aluno;
  - O administrador executa a opção "Gerar relatório de presença";
  - O sistema devolve um relatório em arquivo contendo as presenças e ausências do aluno de acordo com o dia nos dois momentos de chamada.
- **Fluxo alternativo de eventos (O Administrador não é capaz de selecionar a turma)**:
  - O sistema falha em acessar as turmas cadastradas no banco de dados;
  - O administrador deve executar a operação novamente.
- **Fluxo alternativo de eventos (O Administrador não é capaz de acessar os dados do aluno)**:
  - O administrador seleciona uma turma;
  - O sistema exibe a lista de alunos matriculados;
  - O administrador seleciona um aluno específico;
  - O sistema falha em acessar as informações do aluno, impedindo que seja exibida a opção de "Gerar relatório de presença";
  - O administrador deve executar a operação novamente.
- **Fluxo alternativo de eventos (O relatório de presença não é gerado)**:
  - O administrador seleciona uma turma;
  - O sistema exibe a lista de alunos matriculados na turma;
  - O administrador seleciona um aluno específico;
  - O sistema exibe as informações cadastradas do aluno;
  - O administrador executa a opção "Gerar relatório de presença";
  - O sistema falha em devolver um arquivo contendo o relatório de presença do aluno específico;
  - Uma mensagem de erro é exibida, constatando que não foi possível gerar o relatório;
  - O administrador deve executar a operação novamente.

## Caso de uso: Verificar frequência do aluno
- **Descrição geral**: O responsável de um aluno com frequência inferior a 80% é notificado através de um *e-mail*.
- **Atores**: Responsáveis.
- **Pré-condição**: Deve-se verificar o índice de presença do aluno.
- **Pós-condição**: O responsável torna-se ciente da situação do aluno.
- **Fluxo básico de eventos (O responsável acessa o *e-mail* enviado)**:
  - O sistema verifica o índice de frequência de um aluno;
  - Caso esteja abaixo de 80%, o sistema deve enviar um *e-mail* notificando o responsável;
  - O responsável recebe e acessa o *e-mail* em seu correio eletrônico.
- **Fluxo alternativo de eventos (O responsável não recebe o *e-mail*)**:
  - O sistema verifica o índice de frequência de um aluno;
  - Caso esteja abaixo de 80%, o sistema deve enviar um *e-mail* notificando o responsável;
  - Algum erro de execução impede que o *e-mail* seja enviado;
  - O sistema deve indicar que um erro impediu que o responsável recebesse o *e-mail*;

<br>

# Diagrama de sequência
*&lt;Diagrama de ordem e interação dos objetos&gt;*

<br>

# Diagrama de classes
*&lt;Diagrama de relacionamento entre classes para os seus atributos e operações&gt;*

<br>

# Diagrama de Componentes
*&lt;Diagrama para exibir a relação estrutural dos componentes de um sistema de software

<br>

# Decisões de arquitetura
*&lt;Descrever a infraestrutura escolhida para arquitetura do projeto&gt;*

<br>

# Diagrama de implantação
*&lt;Diagrama para exibir o relacionamento de hardware e software no projeto&gt;*

<br>

# Referências
- Material de aula disponibilizado na plataforma *Moodle*;
- DEVMEDIA. O que é UML e Diagramas de Caso de Uso: Introdução Prática à UML.
  - Disponível em https://www.devmedia.com.br/o-que-e-uml-e-diagramas-de-caso-de-uso-introducao-pratica-a-uml/23408;
  - Acesso em 02 out 2023;
- Mestres da Web. Requisitos funcionais e não funcionais: o que são?.
  - Disponível em https://www.mestresdaweb.com.br/tecnologias/requisitos-funcionais-e-nao-funcionais-o-que-sao;
  - Acesso em 02 out 2023;