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
* Aluno 2
* Aluno 3
* Aluno 4
* Aluno 5


# Descrição do projeto

*&lt;Descrição do projeto&gt;*

# Diagrama de casos de uso

````plantuml

@startuml
left to right direction
actor Usuário
actor Administrador
rectangle "Sistema Agenda"{
    Usuário -- (Registrar-se)
    Usuário -- (Fazer Login)
    Usuário -- (Visualizar Familiares)
    Usuário -- (Visualizar Agenda)
    Usuário -- (Adicionar Tarefa)
    Usuário -- (Alterar Tarefa)
    Usuário -- (Excluir Tarefa)
    (Adicionar Tarefa) -- (Notificar)
    (Alterar Tarefa) -- (Notificar)
    (Excluir Tarefa) -- (Notificar)
    (Notificar) -- Usuário

}
Administrador - (Gerenciar Usuários da Familia)
(Gerenciar Usuários da Familia) -- Usuário

@enduml
````

# Descrição dos casos de uso

*&lt;Descrição dos casos de uso&gt;*

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