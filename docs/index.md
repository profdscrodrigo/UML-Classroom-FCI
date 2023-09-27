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

*&lt;Descrição do comportamento entre os atores/resquisitos&gt;*

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
