import java.sql.*;
import java.util.*;

public class Main {

    // Instâncias dos DAOs que acessam o MySQL
    static ClienteDAO clienteDAO = new ClienteDAO();
    static DroneDAO droneDAO = new DroneDAO();
    static PedidoDAO pedidoDAO = new PedidoDAO();
    static ProdutoDAO produtoDAO = new ProdutoDAO();
    static ProdutoPedidoDAO produtoPedidoDAO = new ProdutoPedidoDAO();
    static PagamentoDAO pagamentoDAO = new PagamentoDAO();
    static EntregaDAO entregaDAO = new EntregaDAO();

    static Scanner sc = new Scanner(System.in);


    // Lê uma String e verifica se o usuário digitou "menu"
    private static String lerEntrada() {
        String entrada = sc.nextLine().trim();
        if (entrada.equalsIgnoreCase("menu")) {
            throw new RuntimeException("VOLTAR_MENU"); // usado para retornar ao menu
        }
        return entrada;
    }

    // Lê um número inteiro com suporte ao "menu"
    private static int lerInt() {
        String entrada = lerEntrada();
        if (!entrada.matches("\\d+")) {
            throw new RuntimeException("VOLTAR_MENU");
        }
        return Integer.parseInt(entrada);
    }

    // Lê um número decimal com suporte ao "menu"
    private static double lerDouble() {
        String entrada = lerEntrada();
        try {
            return Double.parseDouble(entrada);
        } catch (Exception e) {
            throw new RuntimeException("VOLTAR_MENU");
        }
    }


    private static double calcularPesoTotal(List<ProdutoPedido> itens) {
        double pesoTotal = 0;
        for (ProdutoPedido pp : itens) {
            Produto p = produtoDAO.buscar(pp.getIdProduto());
            pesoTotal += p.getPeso() * pp.getQuantidade();
        }
        return pesoTotal;
    }

    // Cálculo do valor total
    private static double calcularValorTotal(List<ProdutoPedido> itens) {
        double total = 0;
        for (ProdutoPedido pp : itens) {
            Produto p = produtoDAO.buscar(pp.getIdProduto());
            total += p.getPreco() * pp.getQuantidade();
        }
        return total;
    }

    private static void inicializarProdutos() {
        if (produtoDAO.buscar(1) != null)
            return; // já inicializado

        produtoDAO.salvar(new Produto(1, "Smartphone", 1800.0, 0.3));
        produtoDAO.salvar(new Produto(2, "Notebook", 3500.0, 2.0));
        produtoDAO.salvar(new Produto(3, "Fone Bluetooth", 250.0, 0.1));
        produtoDAO.salvar(new Produto(4, "Livro", 50.0, 0.4));
        produtoDAO.salvar(new Produto(5, "Câmera Fotográfica", 2200.0, 0.8));

        System.out.println("Produtos iniciais cadastrados.");
    }


    private static List<ProdutoPedido> selecionarProdutos(int idPedido) {
        List<ProdutoPedido> lista = new ArrayList<>();

        while (true) {
            System.out.println("\n=== PRODUTOS ===");

            // Lista todos os produtos do MySQL
            try (var con = ConnectionFactory.getConnection();
                 var stmt = con.prepareStatement("SELECT * FROM Produto");
                 var rs = stmt.executeQuery()) {

                while (rs.next()) {
                    System.out.println(
                            rs.getInt("id") + " - " +
                                    rs.getString("nome") + " | R$" +
                                    rs.getDouble("preco") + " | " +
                                    rs.getDouble("peso") + "kg");
                }

            } catch (Exception e) {
                throw new RuntimeException("Erro ao listar produtos: " + e.getMessage());
            }

            System.out.print("ID do produto (0 para finalizar): ");
            int idProd = lerInt();

            if (idProd == 0)
                break; // finaliza seleção

            // Valida produto
            Produto produto = produtoDAO.buscar(idProd);
            if (produto == null) {
                System.out.println("Produto inválido!");
                continue;
            }

            System.out.print("Quantidade: ");
            int qtd = lerInt();

            // Cria o registro ProdutoPedido no banco
            ProdutoPedido pp = new ProdutoPedido(gerarId(), idPedido, idProd, qtd);
            produtoPedidoDAO.salvar(pp);
            lista.add(pp);

            System.out.println("Adicionado!");
        }

        return lista;
    }


    private static void resetarBanco() {
        try (var con = ConnectionFactory.getConnection();
             var st = con.createStatement()) {

            // Remove e recria o banco do zero
            st.execute("DROP DATABASE IF EXISTS SistemaDrone");
            st.execute("CREATE DATABASE SistemaDrone");
            st.execute("USE SistemaDrone");

            // Criação das tabelas
            st.execute("""
                    CREATE TABLE Cliente (
                        id INT PRIMARY KEY,
                        nome VARCHAR(100),
                        email VARCHAR(100),
                        senha VARCHAR(100),
                        endereco VARCHAR(200)
                    );
                """);

            st.execute("""
                    CREATE TABLE Drone (
                        id INT PRIMARY KEY,
                        bateria INT,
                        capacidadePeso DOUBLE
                    );
                """);

            st.execute("""
                    CREATE TABLE Pedido (
                        id INT PRIMARY KEY,
                        idCliente INT,
                        valorTotal DOUBLE,
                        FOREIGN KEY (idCliente) REFERENCES Cliente(id)
                    );
                """);

            st.execute("""
                    CREATE TABLE Produto (
                        id INT PRIMARY KEY,
                        nome VARCHAR(100),
                        preco DOUBLE,
                        peso DOUBLE
                    );
                """);

            st.execute("""
                    CREATE TABLE ProdutoPedido (
                        id INT PRIMARY KEY,
                        idPedido INT,
                        idProduto INT,
                        quantidade INT,
                        FOREIGN KEY (idPedido) REFERENCES Pedido(id),
                        FOREIGN KEY (idProduto) REFERENCES Produto(id)
                    );
                """);

            st.execute("""
                    CREATE TABLE Pagamento (
                        idPagamento INT PRIMARY KEY,
                        idPedido INT,
                        valorPago DOUBLE,
                        tipoPagamento VARCHAR(20),
                        confirmado BOOLEAN,
                        FOREIGN KEY (idPedido) REFERENCES Pedido(id)
                    );
                """);

            st.execute("""
                    CREATE TABLE Entrega (
                        id INT PRIMARY KEY,
                        idPedido INT,
                        idDrone INT,
                        endereco VARCHAR(200),
                        FOREIGN KEY (idPedido) REFERENCES Pedido(id),
                        FOREIGN KEY (idDrone) REFERENCES Drone(id)
                    );
                """);

            System.out.println("Banco resetado automaticamente.");

        } catch (Exception e) {
            throw new RuntimeException("Erro ao resetar BD: " + e.getMessage());
        }
    }


    public static void main(String[] args) {
        resetarBanco();      // recria o BD
        inicializarProdutos(); // popula produtos

        while (true) {
            System.out.println("\n===== SISTEMA DE ENTREGAS POR DRONE =====");
            System.out.println("1. Cadastrar cliente");
            System.out.println("2. Cadastrar drone");
            System.out.println("3. Solicitar entrega");
            System.out.println("4. Histórico por cliente");
            System.out.println("5. Histórico por drone");
            System.out.println("0. Sair");
            System.out.print("Escolha: ");

            try {
                String entrada = lerEntrada();

                if (!entrada.matches("\\d+")) {
                    System.out.println("Opção inválida!");
                    continue;
                }

                int op = Integer.parseInt(entrada);

                switch (op) {
                    case 1 -> cadastrarCliente();
                    case 2 -> cadastrarDrone();
                    case 3 -> solicitarEntrega();
                    case 4 -> historicoPorCliente();
                    case 5 -> historicoPorDrone();
                    case 0 -> {
                        System.out.println("Encerrado.");
                        return;
                    }
                    default -> System.out.println("Opção inexistente!");
                }

            } catch (RuntimeException e) {
                if (e.getMessage().equals("VOLTAR_MENU")) {
                    System.out.println("Voltando ao menu...");
                    continue;
                }
                System.out.println("Erro: " + e.getMessage());
            }
        }
    }


    private static void cadastrarCliente() {
        System.out.println("\n=== CADASTRO DE CLIENTE ===");
        try {
            System.out.print("ID: ");
            int id = lerInt();

            System.out.print("Nome: ");
            String nome = lerEntrada();

            System.out.print("Email: ");
            String email = lerEntrada();

            System.out.print("Senha: ");
            String senha = lerEntrada();

            System.out.print("Endereço completo: ");
            String endereco = lerEntrada();

            Cliente c = new Cliente(id, nome, email, senha, endereco);
            clienteDAO.salvar(c);

            System.out.println("Cliente cadastrado!");

        } catch (RuntimeException e) {
            if (e.getMessage().equals("VOLTAR_MENU")) {
                System.out.println("Cancelado. Voltando ao menu.");
                return;
            }
            throw e;
        }
    }

    private static void cadastrarDrone() {
        System.out.println("\n=== CADASTRO DE DRONE ===");
        try {
            System.out.print("ID: ");
            int id = lerInt();

            System.out.print("Bateria (%): ");
            int bateria = lerInt();

            System.out.print("Capacidade de carga (kg): ");
            double capacidade = lerDouble();

            Drone d = new Drone(id, bateria, capacidade);
            droneDAO.salvar(d);

            System.out.println("Drone cadastrado!");

        } catch (RuntimeException e) {
            if (e.getMessage().equals("VOLTAR_MENU"))
                System.out.println("Cancelado. Voltando ao menu.");
            else
                throw e;
        }
    }

    private static void solicitarEntrega() {
        System.out.println("\n=== SOLICITAÇÃO DE ENTREGA ===");

        try {
            System.out.print("ID do cliente: ");
            int idCliente = lerInt();

            Cliente cliente = clienteDAO.buscar(idCliente);
            if (cliente == null)
                throw new RuntimeException("Cliente não encontrado.");

            // 1. Criar pedido
            int idPedido = gerarId();
            Pedido pedido = new Pedido(idPedido, idCliente);
            pedido.setValorTotal(0);
            pedidoDAO.salvar(pedido);

            // 2. Selecionar produtos
            List<ProdutoPedido> itens = selecionarProdutos(idPedido);

            if (itens.isEmpty()) {
                System.out.println("Nenhum produto selecionado. Cancelado.");
                return;
            }

            // 3. Atualizar valor total
            double pesoTotal = calcularPesoTotal(itens);
            double valorTotal = calcularValorTotal(itens);
            pedido.setValorTotal(valorTotal);
            pedidoDAO.atualizarValor(pedido);

            // 4. pagamento
            System.out.println("\nSelecione o tipo de pagamento:");
            System.out.println("1 - PIX");
            System.out.println("2 - Crédito");
            System.out.println("3 - Débito");
            System.out.println("4 - Dinheiro");

            int tipoPag = lerInt();

            TipoPagamento tipo = switch (tipoPag) {
                case 1 -> TipoPagamento.PIX;  
                case 2 -> TipoPagamento.CARTAO_CREDITO;
                case 3 -> TipoPagamento.CARTAO_DEBITO;
                default -> TipoPagamento.DINHEIRO;
            };

            Pagamento pagamento = new Pagamento(gerarId(), idPedido, valorTotal, tipo);
            pagamento.confirmar();
            pagamentoDAO.salvar(pagamento);

            // 5. Endereço
            System.out.print("Endereço de entrega: ");
            String destino = lerEntrada();
            validarEndereco(destino);

            // 6. Escolher drone
            Drone drone = escolherDrone(pesoTotal);
            if (drone == null)
                throw new RuntimeException("Nenhum drone disponível.");

            // 7. Criar entrega
            Entrega e = new Entrega(gerarId(), idPedido, drone.getIdDrone(), destino);
            entregaDAO.salvar(e);

            System.out.println("\nEntrega criada com sucesso!");
            System.out.println("Drone atribuído: " + drone.getIdDrone());

        } catch (RuntimeException e) {
            if (e.getMessage().equals("VOLTAR_MENU"))
                System.out.println("Cancelado. Voltando ao menu.");
            else
                throw e;
        }
    }

    private static void historicoPorCliente() {
        System.out.print("ID do cliente: ");

        try {
            int id = lerInt();

            System.out.println("\n=== HISTÓRICO DO CLIENTE " + id + " ===");

            Connection con = null;
            PreparedStatement stmt = null;
            ResultSet rs = null;

            try {
                con = ConnectionFactory.getConnection();
                stmt = con.prepareStatement(
                        "SELECT e.id AS entregaId, e.idDrone, p.id AS pedidoId " +
                                "FROM Entrega e JOIN Pedido p ON e.idPedido = p.id " +
                                "WHERE p.idCliente = ?");

                stmt.setInt(1, id);
                rs = stmt.executeQuery();

                boolean achou = false;

                while (rs.next()) {
                    achou = true;
                    System.out.println(
                            "Entrega: " + rs.getInt("entregaId") +
                                    " | Pedido: " + rs.getInt("pedidoId") +
                                    " | Drone: " + rs.getInt("idDrone"));
                }

                if (!achou) {
                    System.out.println("Nenhuma entrega encontrada.");
                }

            } catch (SQLException e) {
                System.out.println("Erro ao buscar histórico do cliente: " + e.getMessage());
            } finally {
                if (rs != null) try { rs.close(); } catch (Exception ignored) {}
                if (stmt != null) try { stmt.close(); } catch (Exception ignored) {}
                if (con != null) try { con.close(); } catch (Exception ignored) {}
            }

        } catch (RuntimeException e) {
            if ("VOLTAR_MENU".equals(e.getMessage()))
                System.out.println("Voltando ao menu...");
            else
                throw e;
        }
    }

    private static void historicoPorDrone() {
        System.out.print("ID do drone: ");

        try {
            int id = lerInt();

            System.out.println("\n=== HISTÓRICO DO DRONE " + id + " ===");

            Connection con = null;
            PreparedStatement stmt = null;
            ResultSet rs = null;

            try {
                con = ConnectionFactory.getConnection();
                stmt = con.prepareStatement(
                        "SELECT id, idPedido FROM Entrega WHERE idDrone = ?");

                stmt.setInt(1, id);
                rs = stmt.executeQuery();

                boolean achou = false;

                while (rs.next()) {
                    achou = true;
                    System.out.println(
                            "Entrega: " + rs.getInt("id") +
                                    " | Pedido: " + rs.getInt("idPedido"));
                }

                if (!achou) {
                    System.out.println("Nenhuma entrega encontrada.");
                }

            } catch (SQLException e) {
                System.out.println("Erro ao buscar histórico do drone: " + e.getMessage());
            } finally {
                if (rs != null) try { rs.close(); } catch (Exception ignored) {}
                if (stmt != null) try { stmt.close(); } catch (Exception ignored) {}
                if (con != null) try { con.close(); } catch (Exception ignored) {}
            }

        } catch (RuntimeException e) {
            if ("VOLTAR_MENU".equals(e.getMessage()))
                System.out.println("Voltando ao menu...");
            else
                throw e;
        }
    }


    // Gera ID aleatório
    private static int gerarId() {
        return new Random().nextInt(999999);
    }

    // Validação simples de endereço
    private static void validarEndereco(String endereco) {
        if (endereco.length() < 6 || !endereco.matches(".*\\d.*")) {
            throw new RuntimeException("Endereço inválido.");
        }
    }

    // Seleciona o primeiro drone válido baseado no peso
    private static Drone escolherDrone(double peso) {
        List<Drone> drones = droneDAO.listarDisponiveis();

        for (Drone d : drones) {
            if (d.validarPeso(peso)) {
                return d;
            }
        }

        return null; // nenhum drone compatível
    }
}
