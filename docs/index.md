<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>


<font size="+12"><center>
### Sistema de presença - Escola Infinito
</center></font>

**Conteúdo**

- [Autores](#autores)
- [Descrição do projeto](#descrição-do-projeto)
- [Análise de requisitos funcionais e não-funcionais](#análise-de-requisitos-funcionais-e-não-funcionais)
- [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
- [Descrição dos casos de uso](#descrição-dos-casos-de-uso)
- [Diagrama de sequencia](#diagrama-de-sequencia)
- [Diagrama de classes](#diagrama-de-classes)
- [Diagrama de Componentes](#diagrama-de-componentes)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-implantação)
- [Referências](#referências)


# Autores

* André Akio Morita Osakawa
* Rafael de Souza Oliveira Cerqueira Tinôco
* Rodrigo Mileo Lourenço Gil

# Descrição do projeto

*O projeto consiste em implementar um sistema para controle de presenças em uma escola  para turmas do 1º ao 5º ano do Ensino Fundamental I. Esse sistema visa atender as necessidades dos docentes, além disso, incluir ferramentas de acessibilidades para todos. Com isso o sistema implementado espera cumprir todos os requisitos de forma simples e eficaz.*

# Análise de requisitos funcionais e não-funcionais
### Requisitos Funcionais

1. Sistema de login (Usuário e senha) para entrar no sistema.
2. Colocar/remover faltas de alunos que não responderem à chamada.
3. Realizar a chamada todos os dias, duas vezes por dia(Início do dia e após o intervalo).
4. Gerar relatórios de faltas agrupados por data, turma, professor, ano do aluno, disciplina e nome do aluno.
5. Enviar notificações via e-mail para pais ou responsáveis em caso de faltas excessivas(porcentagem de comparecimento às aulas dadas até o momento estiverem abaixo de 80%).
6. Caso o aluno tenha menos de 75% de presença do total de aulas dadas, ele será reprovado.

### Requisitos não-funcionais

1. O sistema deve ser implementado em web: Javascript, HTML e CSS
2. O sistema deve ser compatível com dispositivos móveis
3. O sistema deve permitir múltiplos acessos simultâneos
4. O sistema deve se comunicar com um banco de dados
5. O sistema deve ser compatível com todos os navegadores web, incluindo dispositivos móveis
6. O sistema irá bimestralmente verificar as porcentagens de comparecimento e os relatórios serão enviados bimestralmente aos pais e responsáveis caso esteja abaixo de 80%.
7. Recursos de acessibilidade: tamanho da fonte ajustável, dentre outros.
8. Cada professor terá um nome de usuário único de 6 números. E as senhas devem conter minimamente 8 dígitos alfanuméricos.

# Diagrama de casos de uso

![alt](/src/Diagrama_de_uso.png)

# Descrição dos casos de uso

## Caso de Uso: Fazer login

**Descrição geral**: O professor precisa entrar no sistema para realizar a chamada ou colocar faltas

**Atores**: Professor

**Pré-condição**: O professor deve possuir um registro de usuário e senha no sistema

**Pós-condição**: O professor entra no sistema e pode realizar a chamada

**Fluxo básico (Professor deseja entrar no sistema)**

1. Professor insere o nome de usuário e senha

2. Professor consegue entrar no sistema

## Caso de uso: Fazer chamada

**Descrição geral**: O professor deseja fazer a chamada em uma turma

**Atores**: Professor

**Pré-Condição**: O professor deve realizar login no sistema

**Pós-Condição**: O professor realiza a chamada e os dados são enviados ao banco de dados

**Fluxo Básico**:

1. O professor seleciona a data e a turma que deseja

2. Professor seleciona a opção fazer a chamada

3. O professor colocar falta se o aluno não responder ou estiver ausente.

4. O professor confirma as faltas no sistema ao final da chamada

5. Os resultados são enviados ao banco de dados.

## Caso de uso: Gerar Relatório

**Descrição geral**: O professor deseja gerar o relatório de faltas de um aluno

**Atores**: Professor

**Pré-Condição**: O professor deve realizar login no sistema

**Pós-Condição**: O relatório é criado e mandado para o banco de dados

**Fluxo Básico (Professor deseja gerar um relatório de falta)**:

1. O professor escolhe a opção de gerar o relatório de faltas

2. O professor define o critério de agrupamento do relatório como disciplina, aluno, data, etc

3. O relatório de faltas é criado pelo sistema

4. O relatório é enviado ao professor

## Caso de uso: Notificação

**Descrição geral**: Notificação é enviada aos pais quando a porcentagem de comparecimento, até o momento, está abaixo de 80%

**Atores**: Pais/responsáveis

**Pré-Condição**: Porcentagem de comparecimento nas aulas está abaixo de 80%, de acordo com os relátorios gerados

**Pós-Condição**: Notificação é enviada aos pais ou responsáveis via e-mail

**Fluxo Básico**:

1. O relatório de presença é gerado pelo sistema

2. É verificado se o aluno está com menos de 80% de presença de acordo com o relatório

3. Se a porcentagem de comparecimento está abaixo de 80% é mandado uma notificação para os pais ou responsáveis via e-mail

# Diagrama de sequencia

## Diagrama de sequencia: Fazer login
![alt](/src/fazerlogin.png)

## Diagrama de sequencia: Fazer chamada
![alt](/src/fazerchamada.png)

## Diagrama de sequencia: Gerar relatório
![alt](/src/gerarrelatorio.png)

## Diagrama de sequencia: Notificação


# Diagrama de classes

*&lt;Diagrama de relacionamento entre classes para os seus atributos e operações&gt;*

# Diagrama de Componentes

*&lt;Diagrama para exibir a relação estrutural dos componentes de um sistema de software&gt;*

# Decisões de arquitetura

*&lt;Descrever a infraestrutura escolhida para arquitetura do projeto&gt;*

# Diagrama de implantação

*&lt;Diagrama para exibir o relacionamento de hardware e software no projeto&gt;*

# Referências

*&lt;Lista de referências&gt;*
