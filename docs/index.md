<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>

<font size="+12"><center>
E-Commerce YouList
</center></font>


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

* Cristian Leite da Silva
* Aluno 2
* Aluno 3
* Aluno 4


# Descrição do projeto

Este documento tem como objetivo apresentar os requisitos para o desenvolvimento de um sistema de ecommerce de aparelhos eletrônicos. O sistema será desenvolvido utilizando as tecnologias HTML, CSS e JavaScript e será destinado para usuários finais que desejam comprar aparelhos eletrônicos online.

O ecommerce permitirá que os usuários naveguem pelos produtos disponíveis, adicionem produtos a um carrinho de compras, visualizem informações sobre cada produto e concluam o processo de compra online. Além disso, o sistema permitirá que os gerentes de negócios gerenciem o site de ecommerce, realizem análises de desempenho e tomem decisões informadas sobre as operações de negócios.

# Diagrama de casos de uso

```plantuml
@startuml
left to right direction
actor Gerente 
actor Cliente
rectangle "Sistema Youlist"{
    Cliente -- (Fazer compras)
    Cliente -- (Visulizar Produtos)
    Cliente -- (Adicionar Produtos ao carrinho)
    Cliente -- (Finalizar compra)
    Gerente -- (Gerenciar E-Commerce)
    Gerente -- (Acessar Sistema)
    Gerente -- (Gerenciar Produtos)
    Gerente -- (Gerenciar Pedidos)

}
@enduml
```

# Descrição dos casos de uso

##1.Descrições de casos de uso
###Realizar Compra
**Resumo:** Este caso de uso permite que o usuário navegue pelo catálogo de produtos, selecione os produtos desejados e faça o pagamento.

**Ator Principal:** Cliente

**Pré-Condições:**
• cliente deve estar autenticado no Sistema.

**Fluxo Básico:**
1. cliente navega pelo catálogo de produtos e seleciona os produtos desejados.
2. cliente adiciona os produtos ao carrinho de compras.
3. cliente seleciona o método de pagamento.
4. sistema redireciona o cliente para a página do provedor de serviços de pagamento.
5. cliente fornece as informações de pagamento.
6. provedor de serviços de pagamento processa o pagamento.
7. sistema confirma o pagamento e atualiza o status da compra.
8. sistema envia um e-mail de confirmação da compra para o cliente.
9. sistema remove os produtos do carrinho de compras.

**Fluxo Alternativo:**
• No passo 4, se ocorrer algum erro ao redirecionar o cliente para a página do provedor de serviços de pagamento, o sistema exibe uma mensagem de erro.


###Cadastrar Produto
Este caso de uso permite que um gerente de negócios cadastre um novo produto no sistema.
Ator Principal: Gerente de Negócios

**Pré-condições:**
• O gerente de negócios deve estar autenticado no sistema com permissões de cadastro de produtos.

**Fluxo Básico:**
1. O gerente de negócios acessa a página de cadastro de produtos.
2. O gerente de negócios informa as informações do produto (nome, descrição, preço, imagens, etc.).
3. O sistema valida as informações do produto.

**Fluxo Alternativo:**
• No passo 3, se alguma informação do produto estiver incorreta, o sistema exibe uma mensagem de erro.

# Protótipos de tela

*&lt;Protótipos de tela&gt;*

# Modelo de domínio
**Cliente**
```plantuml
@startuml

left to right direction
!define Table(name,desc) class name as "desc" << (T,#FFAAAA) >>
!define Entity(name,desc) class name as "desc" << (E,#FFFFB2) >>
!define Enum(name,desc) class name as "desc" << (E,#C2FFAE) >>
!define Interface(name,desc) interface name as "desc" << (I,#C5D3E9) >>
!define Annotation(name,desc) class name as "desc" << (A,#FFD7A7) >>

skinparam class {
    BackgroundColor<< (T,#FFAAAA) >> #FFDDDD
    BackgroundColor<< (E,#FFFFB2) >> #FFFFDD
    BackgroundColor<< (I,#C5D3E9) >> #DDDDFF
    BackgroundColor<< (A,#FFD7A7) >> #FFEECC
    BorderColor black
    ArrowColor black
}

Entity(Cliente, "Cliente") {
    +id : int
    +nome : string
    +email : string
    +senha : string
    +enderecoEntrega : Endereco
    +enderecoCobranca : Endereco
}

Entity(Endereco, "Endereco") {
    +id : int
    +rua : string
    +numero : string
    +complemento : string
    +cidade : string
    +estado : string
    +pais : string
    +cep : string
}

Entity(Produto, "Produto") {
    +id : int
    +nome : string
    +descricao : string
    +preco : decimal
    +estoque : int
}

Entity(Categoria, "Categoria") {
    +id : int
    +nome : string
    +descricao : string
}

Entity(Carrinho, "Carrinho") {
    +id : int
    +cliente : Cliente
    +itens : List<ItemCarrinho>
}

Entity(ItemCarrinho, "ItemCarrinho") {
    +id : int
    +produto : Produto
    +quantidade : int
}

Interface(MeioPagamento, "MeioPagamento") {
    +pagar(carrinho: Carrinho, formaPagamento: FormaPagamento) : Pagamento
}

Enum(FormaPagamento, "FormaPagamento") {
    CARTAO_CREDITO
    CARTAO_DEBITO
    BOLETO
}

Entity(Pagamento, "Pagamento") {
    +id : int
    +carrinho : Carrinho
    +formaPagamento : FormaPagamento
    +valor : decimal
    +codigoTransacao : string
}

Entity(Pedido, "Pedido") {
    +id : int
    +cliente : Cliente
    +itens : List<ItemPedido>
    +valorTotal : decimal
    +enderecoEntrega : Endereco
    +enderecoCobranca : Endereco
    +status : StatusPedido
}

Enum(StatusPedido, "StatusPedido") {
    PENDENTE_PAGAMENTO
    PROCESSANDO
    ENVIADO
    ENTREGUE
    CANCELADO
}

Entity(ItemPedido, "ItemPedido") {
    +id : int
    +produto : Produto
    +quantidade : int
}

Cliente -> Endereco : possui
Produto -> Categoria : pertence a
Produto --> ItemCarrinho : possui
Carrinho -> ItemCarrinho : contém
Cliente --> Carrinho : tem
Carrinho --> Pagamento : gera
MeioPagamento <|.. Pagamento : utiliza
Cliente --> Pedido : faz
Pedido --> ItemPedido : contém
Pedido -> Endereco : possui
Pedido ..> StatusPedido : tem
@enduml
```
**Gerente**
```plantuml
@startuml

!define Table(name,desc) class name as "desc" << (T,#FFAAAA) >>
!define Entity(name,desc) class name as "desc" << (E,#FFFFB2) >>
!define Enum(name,desc) class name as "desc" << (E,#C2FFAE) >>
!define Interface(name,desc) interface name as "desc" << (I,#C5D3E9) >>
!define Annotation(name,desc) class name as "desc" << (A,#FFD7A7) >>

skinparam class {
    BackgroundColor<< (T,#FFAAAA) >> #FFDDDD
    BackgroundColor<< (E,#FFFFB2) >> #FFFFDD
    BackgroundColor<< (I,#C5D3E9) >> #DDDDFF
    BackgroundColor<< (A,#FFD7A7) >> #FFEECC
    BorderColor black
    ArrowColor black
}

Entity(Gerente, "Gerente") {
    +id : int
    +nome : string
    +email : string
    +senha : string
}

Entity(Ecommerce, "E-commerce") {
    +id : int
    +nome : string
    +url : string
    +gerente : Gerente
    +produtos : List<Produto>
    +categorias : List<Categoria>
    +pedidos : List<Pedido>
}

Gerente -> Ecommerce : gerencia
Ecommerce -> Produto : possui
Ecommerce -> Categoria : possui
Ecommerce -> Pedido : possui

@enduml

```
# Decisões de arquitetura

Utilização de uma arquitetura baseada em microsserviços.

Justificativa: Com o objetivo de garantir a escalabilidade e a manutenção do sistema a longo prazo, optou-se por uma arquitetura baseada em microsserviços. Isso permitirá que cada funcionalidade do sistema seja desenvolvida, implantada e mantida independentemente, facilitando a evolução e atualização do sistema.

Com essa arquitetura, cada microsserviço pode ser desenvolvido em uma linguagem de programação diferente, permitindo escolher a melhor tecnologia para cada funcionalidade do sistema. Além disso, a arquitetura baseada em microsserviços possibilita o uso de ferramentas de orquestração e gerenciamento de contêineres, como o Kubernetes, que facilitam o escalonamento automático dos serviços em resposta ao aumento de tráfego.

Por fim, a arquitetura baseada em microsserviços também oferece uma maior resiliência e disponibilidade do sistema. Caso ocorra uma falha em um dos microsserviços, o restante do sistema não é afetado, mantendo a continuidade da operação.

# Diagrama de implantação

```plantuml
@startuml
left to right direction

node "<u>Computador Pessoal</u>" as pc1 <<DispositivoCliente>>{
    node "<u>Chrome</u>" as chrome <<NavegadorWeb>>
}

node "<u>Computador Pessoal</u>" as pc2 <<DispositivoCliente>>{
    node "<u>Firefox</u>" as firefox <<NavegadorWeb>>
}

node "<u>Host web</u>" as hostweb <<Host>>{
    node "<u>AWS Server</u>" as AWSServer <<SO>>{
        node "<u>Backend</u>" as backend <<Node.js>>{
            artifact javascript.js <<JS>>
        }

    }
}

node "<u>HostDB</u>" as hostdb <<Host>>{
    node "<u>AWS Server</u>" as AWSServer <<SO>>{
        database "<u>Banco de Dados</u>" as db <<MySQL>>
    }
}

chrome -- javascript: HTTPS
firefox -- javascript: HTTPS
backend -- db: SQL*Net

@enduml



```

# Referências

*&lt;Lista de referências&gt;*