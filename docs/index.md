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

* Gabriel Hannonen Vieira - 32132646
* Carolina Muniz Piche - 32143621
* Matheus Guarnieri Pfau Ferreira - 32113072
* João Lucas de Calorio - 32108818


# Descrição do projeto

O projeto será um sistema de registro de falta e presença, onde o professor acessa um site que permite a ele marcar a falta ou presença de alunos, o professor selecionará a turma e preenchera a chamada, selecionando se foi o professor geral ou o professor de ef ou ingles que fizera aquela chamada. As presenças e o dados seram armazenados em um banco de dados, e um relatorio poderá ser gerado contendo informações de faltas dos alunos, alem disso, caso o aluno tenha faltado mais de 20%, um email sera enviado ao parentes ou responsaveis avisando-os de que o aluno não esta comparecendo as aulas, e perguntando se algo esta errado ou acontecendo.

# Diagrama de casos de uso

![Diagrama Caso de Uso](https://user-images.githubusercontent.com/80272512/219518681-0459a83e-d81f-43ce-9f38-7b3ff20ed2b3.PNG)


# Descrição dos casos de uso

![Capturar](https://user-images.githubusercontent.com/80272512/219515442-a1b4778a-4353-4be8-b8af-54db772dba54.PNG)
![Capturar1](https://user-images.githubusercontent.com/80272512/219515511-05908fc3-2cab-4a82-8894-ff36a5a5239c.PNG)
![Capturar2](https://user-images.githubusercontent.com/80272512/219515571-7299ee27-6205-41a8-b374-d4d78528333e.PNG)
![Capturar3](https://user-images.githubusercontent.com/80272512/219515622-2921d37b-44a6-4e95-969d-3b0f49df16ed.PNG)
![Capturar4](https://user-images.githubusercontent.com/80272512/219515712-591fb533-7b2d-4485-9ee3-1e53cd5397e7.PNG)

![Especificação Caso de Uso - Registrar Falta 1](https://user-images.githubusercontent.com/100203253/219480507-783b63f5-3768-461b-a1f7-cb616a8c0736.jpg)
![Especificação Caso de Uso - Registrar Falta 2](https://user-images.githubusercontent.com/100203253/219480516-499ef57a-b87c-4071-9aae-9a4f1642e29c.jpg)
![Especificação Caso de Uso - Registrar Falta 3](https://user-images.githubusercontent.com/100203253/219480521-bb8088f3-6a34-4ed1-b427-7ac24c4db6a9.jpg)
![Especificação Caso de Uso - Registrar Falta 4](https://user-images.githubusercontent.com/100203253/219480523-a4ca493f-a09c-4c71-a671-ed496eabe664.jpg)


![Especificação João Lucas de Calorio-1](https://user-images.githubusercontent.com/100203031/219905756-2d497e5a-dfbf-40c6-9458-cc841184462c.png)
![Especificação João Lucas de Calorio-2](https://user-images.githubusercontent.com/100203031/219905757-7a77ef03-5180-4497-b46f-0d59f3c24703.png)
![Especificação João Lucas de Calorio-3](https://user-images.githubusercontent.com/100203031/219905759-92607a78-c121-408f-8627-f23975f4afeb.png)


# Protótipos de tela

*&lt;Protótipos de tela&gt;*

![Identidade Visual](https://user-images.githubusercontent.com/80272512/219496774-9a10a7f6-e6e3-4ad6-9a08-54bf5d8f0db9.png)

Layout das telas 

![Login](https://user-images.githubusercontent.com/80272512/219496919-0c78b01a-4c41-4001-b1e0-55d38df2c50c.png)
Professor Principal 
![Professor Principal](https://user-images.githubusercontent.com/80272512/219497283-ba1dffbd-6a9a-4aed-b319-71b166434342.png)
Professor Específico
![Professor Ed.Física/Ingles](https://user-images.githubusercontent.com/80272512/219497711-b94263b5-4d03-43a1-94e8-6c58f4f44ab0.png)
![Professor Ed.Física/Ingles01](https://user-images.githubusercontent.com/80272512/219497839-a50f0edd-015f-45e6-927f-42fb205b082a.png)
![MarcarAulas](https://user-images.githubusercontent.com/80272512/219514466-d1c886fc-b5da-4c9e-9908-600784553612.png)
![Marcar Falta](https://user-images.githubusercontent.com/80272512/219497966-73cc8ebd-9661-4fe2-9f70-adf03783f211.png)
![Falta Marcada](https://user-images.githubusercontent.com/80272512/219498015-2c315cc9-1dba-4807-8a24-ef0838174c30.png)
![Cancelar](https://user-images.githubusercontent.com/80272512/219498074-04e0a2be-fdb2-47fa-ac00-66547ef0bdcb.png)
![Confirmar Faltas](https://user-images.githubusercontent.com/80272512/219498147-d3ce8c1b-3df7-422d-b7ad-57e6686b74d2.png)


# Modelo de domínio
![Blank diagram](https://user-images.githubusercontent.com/78962671/221851621-41976280-8375-49d5-9594-323b4208573e.png)

*&lt;Modelo de domínio&gt;*

# Decisões de arquitetura

Tendo em vista que o sistema é uma aplicação web, e necessita estar ligado a um banco de dados (como MongoDB) para guardar os dados, essas especificações influenciam no momento de definir a arquitetura desse projeto. Além disso, o documento coloca que precisa ser acessível de qualquer tipo de navegador (incluindo mobile), levando esse tópico em consideração também no momento da arquitetura da solução.
O serviço será desenvolvido em Python, na parte relacionada ao back-end, sendo utilizado o framework. Já o front-end, toda a parte de interface gráfica e interação com o usuário, utilizará html, css e javascript. 

Diagrama de Componentes

![Diagrama Componentes](https://user-images.githubusercontent.com/100203253/222007673-e9fbfbad-000f-4df5-ab30-e6af322048f0.png)

Diagramas de Sequência

![Diagrama Sequencia Selecionar Sala](https://user-images.githubusercontent.com/100203253/222007713-0fe10c0d-ada8-4c9b-853f-502394d62fa9.png)
![Diagrama Sequencia Registrar Falta](https://user-images.githubusercontent.com/100203253/222007711-fef20c8b-98cd-4a0c-bc73-ee7427b14946.png)
![Diagrama de Sequencia Registar CHamada](https://user-images.githubusercontent.com/100203031/222009995-7ca4f38c-e0cb-41b0-9cda-950c4e6be104.png)


*&lt;Decisões de arquitetura&gt;*

# Diagrama de implantação
![Diagrama de Implantação](https://user-images.githubusercontent.com/100203031/221992040-499fa780-84ad-4ba4-882c-3059dfbcb36b.png)


*&lt;Diagrama de implantação&gt;*

# Referências

*&lt;Lista de referências&gt;*
