# Sistema de Entregas com Drones

## Cliente Inicial

Ao executar o programa, um cliente de exemplo (`João da Silva`) é criado automaticamente. Se ele já existe no banco:

```
Aviso: Cliente já cadastrado!
Esquema inicializado/validado no MySQL.
Drones já cadastrados: 4

--- Menu ---
...
```

---

## Menu Principal

Ao executar o programa, você verá:

```
--- Menu ---
1) Cadastrar cliente
2) Listar clientes
3) Listar drones
4) Realizar entrega interativa
5) Consultar histórico de cliente
6) Sair
```

### Opção 1: Cadastrar Cliente

```
Digite suas informações:
Nome: João Silva
CPF: 11144477735
Telefone: 11999999999
Email: joao@example.com
Senha: SenhaSegura123
Rua: Av. Paulista
Numero: 1000
Cidade: São Paulo
Estado: SP
CEP: 01310-100

Cliente cadastrado com sucesso.
```

**Validações aplicadas:**
- ✓ CPF válido (11 dígitos com checksum)
- ✓ Email contém @
- ✓ Senha entre 6-12 caracteres
- ✓ CEP formato XXXXX-XXX
- ✓ Email único no banco

**Erro esperado:**
```
Falha ao cadastrar cliente: Cliente já cadastrado!
```

### Opção 2: Listar Clientes

```
Clientes registrados: 3
- 1 | João Silva | joao@example.com
- 2 | Maria Santos | maria@example.com
- 3 | Pedro Costa | pedro@example.com
```

### Opção 3: Listar Drones

```
Drones cadastrados: 4
- id=1 cap=5.0 status=DISPONIVEL bateria=90
- id=2 cap=2.5 status=DISPONIVEL bateria=80
- id=3 cap=10.0 status=MANUTENCAO bateria=40
- id=4 cap=8.0 status=DISPONIVEL bateria=75
```

**Legendas:**
- `cap`: Capacidade em kg
- `status`: DISPONIVEL ou MANUTENCAO
- `bateria`: Nível em %

### Opção 4: Realizar Entrega Interativa

```
Email do cliente: joao@example.com
Peso da entrega (kg): 3.5
Rua destino: Rua das Flores
Numero destino: 456
Cidade destino: Rio de Janeiro
Estado destino: RJ
CEP destino: 20000-000
Valor do pagamento: 50.00
Método (PIX/CREDITO/DEBITO/BOLETO): PIX

Drone atribuído: id=1
Entrega finalizada com id=1
```

**Fluxo internamente:**
1. Busca cliente por email
2. Valida destino (endereço)
3. Cria pagamento
4. Busca drone disponível com capacidade
5. Atribui drone à entrega
6. Marca como entregue

### Opção 5: Consultar Histórico

```
Email do cliente: joao@example.com
Historico de entregas: 2
- id=1 status=ENTREGUE destino=Rua das Flores
- id=3 status=ENTREGUE destino=Av. Atlântica
```

### Opção 6: Sair

```
Saindo...
```

---

## Segurança

### Senha

- **Hash:** SHA-256 + Base64
- **Comprimento:** 6-12 caracteres
- **Armazenamento:** Banco de dados

### CPF

- **Validação:** 11 dígitos
- **Formato:** "11144477735"
- **Rejeita:** "00000000000", "11111111111"

### CEP

- **Formato:** XXXXX-XXX (5 dígitos, hífen, 3 dígitos)
- **Exemplo:** "01310-100"

### SQL Injection Prevention

Todos os queries usam **PreparedStatement**:


---

## Tratamento de Erros

### Erro: "Cliente não encontrado"

```
Email do cliente: invalido@email.com
Cliente não encontrado: invalido@email.com
```

**Solução:** Digite um email de cliente já cadastrado

### Erro: "CPF inválido"

```
Falha ao cadastrar cliente: CPF inválido
```

**Solução:** Use CPF com 11 dígitos válidos (não 00000000000)

### Erro: "Nenhum drone disponível"

```
Nenhum drone disponível no momento.
```

**Solução:** A entrega foi salva, mas aguarda drone disponível

### Erro: "Pagamento recusado"

```
Pagamento recusado. Entrega cancelada.
```

**Causas possíveis:**
- Valor ≤ 0
- Método inválido (deve ser PIX/CREDITO/DEBITO/BOLETO)

---

## Testando Manualmente

### Cenário 1: Cadastro Completo

1. **Opção 1:** Cadastre um novo cliente
   - Nome: Teste Silva
   - CPF: 12345678901 (use CPF válido)
   - Email: teste@test.com
   - Senha: Senha123

2. **Opção 2:** Liste clientes e confirme

3. **Opção 4:** Faça entrega com o cliente

### Cenário 2: Validação de Entrada

1. **Opção 1:** Tente cadastrar com CPF inválido
   - Esperado: "CPF inválido"

2. **Opção 1:** Tente cadastrar com CEP inválido
   - Esperado: "CEP inválido"

3. **Opção 1:** Tente senha com < 6 caracteres
   - Esperado: "Senha deve ter entre 6 e 12 caracteres"

### Cenário 3: Histórico

1. Cadastre cliente
2. Crie 2 entregas
3. Opção 5: Consulte histórico
   - Esperado: Listar as 2 entregas

---

## Fluxo de Entrega Completo

```
1. Consultar dronesFallback disponíveis
   └─► SELECT * FROM drones WHERE status='DISPONIVEL'

2. Validar endereço de destino
   └─► Verifica se rua/numero/cidade/estado/cep estão preenchidos

3. Criar pagamento
   └─► INSERT INTO pagamentos (valor, metodo, status, data)

4. Atribuir drone à entrega
   └─► SELECT FROM drones com capacidade >= peso

5. Salvar entrega
   └─► INSERT INTO entregas (...) VALUES (...)

6. Registrar no histórico
   └─► Consultável via buscarPorCliente(Cliente)

7. Finalizar entrega
   └─► UPDATE entregas SET status='ENTREGUE'
```

## Estrutura de Diretórios

```
src/
├── Main.java
├── entities/
│   ├── Cliente.java
│   ├── Drone.java
│   ├── Endereco.java
│   ├── Entrega.java
│   └── Pagamento.java
├── service/
│   ├── BancoDados.java
│   ├── ControleEntrega.java
│   ├── RepositorioCliente.java
│   ├── RepositorioDrone.java
│   ├── RepositorioEntrega.java
│   ├── RepositorioPagamento.java
│   ├── SistemaAutenticacao.java
│   ├── UtilitarioSeguranca.java
│   ├── ValidadorEntrada.java
│   └── interfaces/
│       ├── IRepositorio.java
│       ├── IRepositorioCliente.java
│       ├── IRepositorioDrone.java
│       ├── IRepositorioEntrega.java
│       └── IRepositorioPagamento.java

```

---


## Referência Rápida de Comandos

| Ação | Descrição |
|------|-----------|
| `1` | Cadastrar novo cliente |
| `2` | Ver todos os clientes |
| `3` | Ver drones disponíveis |
| `4` | Criar nova entrega |
| `5` | Ver histórico de cliente |
| `6` | Encerrar programa |

