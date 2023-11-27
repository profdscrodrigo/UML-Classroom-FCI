<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>


<font size="+12"><center>
*&lt;Pizza-Express&gt;*
</center></font>

**Conteúdo**


- [Autores](#nome-alunos)
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

* Diego Estevão Lopes de Queiroz - 32361262
* Erik Salomão Almeida - 32333048
* Guilherme de Souza Ponciano - 42016061
* Nicolas Gonçalves Santos - 32337590
# Descrição do projeto
A Pizza-Express é uma cadeia de 40 lojas de fast-food e entrega em casa. Pizza-Express tem perdido recentemente 30% do rendimento de vendas devido a um problema em seu negócio da entrega. Atribuem este problema a seu concorrente principal que promoveu um programa que garante o serviço de entrega em 30 minutos, desde a entrada da ordem de serviço até a entrega na casa do cliente (delivery). Pizza-Express anuncia a entrega em uma hora. Pizza-Express usa atualmente computadores para armazenar as operações e as funções usuais do negócio, mas não auxiliam nas funções para processar a entrega dos pedidos dos seus clientes. Elonn Muske, o gerente de sistemas de informação é o encarregado para desenvolver uma aplicação do software para identificar a localização de lojas de pizza Pizza-Express mais próxima do cliente e para criar o sistema de software necessário para operá-las. O patrocinador deste projeto, a empresa Papa-Léguas Delivery, disse que o futuro da Pizza-Express depende deste projeto. A equipe deverá investigar uma opção para entregar a pizza em menos de 30 minutos. A sua idéia é montar lojas de pizza Pizza-Express que não teriam nenhum espaço de varejo, pois a sua função é somente receber ordens, preparar e entregar as pizzas. A loja deverá ser localizada o mais próximo do cliente receberá a ordem através de uma central, processará, e entregará a ordem dentro de 10 ou 15 minutos da entrada do pedido. Há dois projetos do desenvolvimento do software identificados aqui: primeiro é um sistema de software para o atendimento do pedido e para encontrar localização da fábrica da pizza mais próxima do cliente para fazer a entrega; e segundo é um sistema de software para suportar operações da fábrica de pizzas.

# Análise de requisitos funcionais e não-funcionais

-Localizar a loja mais próxima do cliente.

-Receber o pedido pela central.

-Processar e entregar (10-15 minutos).

-Software central para pedidos e localizar.

-Software local para receber e despachar o pedido.

# Diagrama de casos de uso
![Diagram drawio](https://github.com/destlq/Topico-17/assets/142526482/2bb0b05f-38b6-4f91-b4a4-21b8d3ccb334)

# Descrição dos casos de uso
![atendimentoCentral](https://github.com/destlq/Topico-17/assets/124603581/f5b830c2-820f-4684-8136-93d434b0e08b)


Descrição dos requisitos: Operação Pizzaria
![operacaoPizzaria](https://github.com/destlq/Topico-17/assets/124603581/ddc40584-1fa0-4635-9efb-1508f66044cd)


No diagarama que descreve o caso de uso do atendimento central da pizzaria, a central tem como função inicial receber o pedido realizado por um cliente, até o momento de enviar o pedido para fábrica mais próxima, passando, durante essas funções, pela etapa de localizar o cliente.

No caso da operação pizza, que aborda o caso de uso das fábricas, o ator "pizzaria/fábrica" tem como função o recebimento do pedido da central e a transmissão desse pedido para os funcionários. Neste mesmo diagrama, os demais atores são compostos pelo ator "pizzaiolo", que deve preparar o pedido, e o ator "entregador" que, após a preparação do pedido, é responsável por entregá-lo. 

# Diagrama de sequencia

![image](https://github.com/destlq/Topico-17/assets/126416974/737ae5bf-893c-4341-9bf7-5a89257b8fdc)


# Diagrama de classes

![classe drawio](https://github.com/destlq/Topico-17/assets/142526482/642e3745-1444-43b1-9b3c-0f3e265d38e7)

# Diagrama de Componentes

![Componentes](https://github.com/destlq/Topico-17/assets/130717670/4b84d868-7389-4b80-b736-fe7b8f85f9f2)


# Decisões de arquitetura
Sistema Operacional: Linux

O sistema operacional escolhido para o sistema de pizzaria online é o Linux. Existem várias razões para essa escolha:

* Segurança: O Linux é conhecido por sua robustez e segurança. A natureza de código aberto permite que problemas de segurança sejam identificados e corrigidos rapidamente pela comunidade de desenvolvedores.

* Estabilidade: O Linux é altamente estável, proporcionando um ambiente consistente para operações críticas, como processamento de pedidos, gerenciamento de estoque e transações financeiras.

* Custo: Linux é um sistema operacional de código aberto, o que significa que é gratuito para uso. Isso reduz os custos de licenciamento, permitindo que os recursos financeiros sejam direcionados para o desenvolvimento e aprimoramento do sistema.

* Desempenho: O Linux é conhecido por seu desempenho eficiente, proporcionando uma execução rápida e eficaz das operações do sistema. Isso é crucial para garantir que os pedidos sejam processados de maneira eficiente e sem atrasos.

Linguagem de Programação: Python

A escolha da linguagem de programação Python é respaldada pelos seguintes motivos:

* Simplicidade e Legibilidade: Python é conhecido por sua sintaxe clara e fácil compreensão. Isso acelera o desenvolvimento, facilita a manutenção do código e permite uma curva de aprendizado mais suave para desenvolvedores.

* Ampla Comunidade e Bibliotecas: Python possui uma vasta comunidade de desenvolvedores e uma ampla variedade de bibliotecas, frameworks e ferramentas que facilitam o desenvolvimento rápido e eficiente de aplicações web, como Django ou Flask.

* Integração com Tecnologias Existentes: Python pode ser facilmente integrado com outras tecnologias e sistemas, permitindo a comunicação eficiente com bancos de dados, APIs de pagamento, e outros componentes essenciais para um sistema de pedidos online.

* Escabilidade: Python é escalável, permitindo que o sistema cresça conforme a demanda. Isso é crucial para um sistema de pizzaria online, que pode experimentar variações na carga de trabalho durante períodos de pico.
![Server drawio](https://github.com/destlq/Topico-17/assets/142526482/845b0cce-f7f1-4440-9cab-f763c8a93f8c)


# Diagrama de implantação

![imp drawio](https://github.com/destlq/Topico-17/assets/142526482/8b43f159-f30e-469d-9e6d-5b930b17a6a9)


# Referências

*&lt;Lista de referências&gt;*
