<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>


<font size="+12"><center>
*&lt;Nome do Projeto&gt;*
</center></font>

>*Observação 1: A estrutura inicial deste documento é só um exemplo. O seu grupo deverá alterar esta estrutura de acordo com o que está sendo solicitado na disciplina.*

>*Observação 2: O índice abaixo não precisa ser editado se você utilizar o Visual Studio Code com a extensão **Markdown All in One**. Essa extensão atualiza o índice automaticamente quando o arquivo é salvo.*

**Conteúdo**

- [Autores](#autores)
- [Descrição do projeto](#descrição-do-projeto)
- [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
- [Descrição dos casos de uso](#descrição-dos-casos-de-uso)
- [Protótipos de tela](#protótipos-de-tela)
- [Modelo de domínio](#modelo-de-domínio)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-implantação)
- [Referências](#referências)


# Autores

* Danilo Massanori Terashima da Silva
* Filipe Crepuscoli
* Matheus de Oliveira Valencio
* Monique de Paula Nunes da Silva
* Renan Alves Vieira


# Descrição do projeto

Destinado ao apoio das famílias para a organização de suas tarefas. Permitindo o 
gerenciamento dos membros da família através de contas individuais, possibilitando a 
organização e atualização de listas de compras e tarefas pendentes.

# Diagrama de casos de uso



# Descrição dos casos de uso

##Descrição detalhada dos casos de uso principais
### Registra-se (CDU001)
**Resumo:** Criação de um novo usuário no aplicativo
**Ator principal:** Usuário
**Pré-condições:** Usuário se conectar pela primeira vez ao aplicativo
**Pós-condições:**  Criação de Conta e cadastro de dados

#### Fluxo Principal
1.	O usuário acessa a aplicação;
2.	O usuário acessa o menu Usuário;
3.	O usuário clica em "Novo Usuário";
4.	O usuário é solicitado para preencher os dados solicitados;
5.	O usuário confirma o cadastro;
6.  A autenticação é realizada.

#### Fluxo de Exceção
Usuário informa um CPF inválido e o sistema não efetiva o cadastro.

### Gerenciar usuários da familia (CDU002)
**Resumo:** Gerenciar as atividades de cada usuário que pertence a família
**Ator principal:** Administrador
**Pré-condições:** Possuir mais de um usuário e hierarquicamente "abaixo" para gestão
**Pós-condições:** Gerenciar as ações dos usuários

#### Fluxo Principal
1. O Administrador acessa a aplicação;
2. O Administrador acessa o menu Usuário;
3. O sistema exibe as informações dos usuários cadastrados;
4. O Administrador pode clicar no ícone; representado pela lixeira para realizar a exclusão de um usuário.

#### Fluxo de Exceção
N/A

### Fazer Login (CDU003)
**Resumo:** Usuário faz autenticação no aplicativo
**Ator principal:** Usuário
**Pré-condições:** Usuário inicia aplicação no dispositivo
**Pós-condições:** Usuário é direcionado as páginas do aplicativo

#### Fluxo Principal
1.	O usuário acessa a aplicação;
2.	O usuário informa o login e senha cadastrados;
3.  O usuário clica em "Login";
1.  A autenticação é realizada;
2.  O sistema carrega e exibe as funcionalidades da aplicação.

#### Fluxo de Exceção
O usuário informa a senha incorretamente e a aplicação não efetiva o login.

### 10.4 Visualizar Agenda (CDU004)
**Resumo:** Possibilita a visualização das tarefas pendentes
**Ator principal:** Usuário
**Pré-condições:** N/A
**Pós-condições:** Exibe as tarefas pendentes

#### Fluxo Principal
1.	O usuário acessa a aplicação;
2.  O usuário acessa o menu Cadastro de Tarefas;
3.  O sistema exibe as tarefas cadastradas;
4.  O usuário pode utilizar o campo de filtro para buscar uma tarefa desejada.

#### Fluxo de Exceção
N/A

### Adicionar Tarefa (CDU005)
**Resumo:** Adiciona uma tarefa ao banco de dados
**Ator principal:** Usuário
**Pré-condições:** Usuário conectado ao aplicativo
**Pós-condições:** Criação da tarefa e cadastro de dados

#### Fluxo Principal
1. O usuário acessa a aplicação;
2. O usuário acessa o menu Cadastro de Tarefas;
3. O usuário clica no botão Nova tarefa;
4. O usuário preenche as informações solicitadas;
5. O usuário clica no botão Cadastrar;
6. O sistema exibe a tarefa cadastrada.

#### Fluxo de Exceção
Usuário clica no botão de cancelar caso não deseje adicionar tarefa.

### Alterar Tarefa (CDU006)
**Resumo:** Altera uma uma tarefa cadastrada no banco de dados
**Ator principal:** Usuário
**Pré-condições:** Usuário conectado no aplicativo e possuir uma tarefa criada em sistema
**Pós-condições:** As informações das tarefas são atualizadas conforme solicitado pelo usuário

#### Fluxo Principal
1. O usuário acessa a aplicação;
2. O usuário acessa o menu Cadastro de Tarefas;
3. O sistema exibe as tarefas cadastradas;
4. O usuário clica no ícone representado pelo lápis na tarefa que deseja realizar a alteração;
5. O usuário realiza a alteração desejada;
6. O usuário clica no botão Atualizar;
7. O sistema carrega a página com a tarefa atualizada.
   
#### Fluxo de Exceção
Usuário clica no botão de cancelar caso não deseje alterar tarefa.

### Excluir Tarefa (CDU007)
**Resumo:** Excluir uma tarefa ao banco de dados
**Ator principal:** Usuário
**Pré-condições:** Usuário conectado ao aplicativo e tarefa criada.
**Pós-condições:** Remoção da tarefa e dos dados

#### Fluxo Principal
1. O usuário acessa a aplicação;
2. O usuário acessa o menu Cadastro de Tarefas;
3. O sistema exibe as tarefas cadastradas;
4. O usuário clica no ícone representado pela lixeira na tarefa que deseja realizar a exclusão;
5. O usuário clica no botão Deletar;
6. O sistema carrega a página considerando a exclusão.
   
#### Fluxo de Exceção
Usuário clica no botão de cancelar caso não deseje excluir tarefa.

# Protótipos de tela

*&lt;Protótipos de tela&gt;*

# Modelo de domínio

*&lt;Modelo de domínio&gt;*

# Decisões de arquitetura

*&lt;Decisões de arquitetura&gt;*

# Diagrama de implantação

*&lt;Diagrama de implantação&gt;*

# Referências

*&lt;Lista de referências&gt;*