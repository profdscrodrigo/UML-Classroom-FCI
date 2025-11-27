import entities.Cliente;
import entities.Drone;
import entities.Endereco;
import entities.Entrega;
import service.BancoDados;
import service.RepositorioCliente;
import service.RepositorioDrone;
import service.RepositorioEntrega;
import service.RepositorioPagamento;
import service.ControleEntrega;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        try {
            BancoDados bancoDados = new BancoDados();
            bancoDados.inicializarEsquema();

            RepositorioCliente repositorioCliente = new RepositorioCliente(bancoDados);
            RepositorioDrone repositorioDrone = new RepositorioDrone(bancoDados);
            RepositorioEntrega repositorioEntrega = new RepositorioEntrega(bancoDados);
            RepositorioPagamento repositorioPagamento = new RepositorioPagamento(bancoDados);

            repositorioDrone.semearDronesPadrao();
            ControleEntrega controle = new ControleEntrega(bancoDados);

            Endereco endCliente = new Endereco("Rua das Flores", 123, "São Paulo", "SP", "01000-000");
            Endereco endDestino = new Endereco("Av. Paulista", 500, "São Paulo", "SP", "01310-000");

            Cliente cliente = new Cliente("João da Silva", "11144477735", "11999999999",
                "joao@email.com", "123456", endCliente);

            try {
                repositorioCliente.salvar(cliente);
            } catch (IllegalArgumentException ex) {
                System.out.println("Aviso: " + ex.getMessage());
            } catch (Exception ex) {
                System.out.println("Erro ao salvar cliente inicial: " + ex.getMessage());
            }

            try {
                Cliente clienteBd = repositorioCliente.buscarPorEmail(cliente.getEmail());
                if (clienteBd != null) {
                    cliente = clienteBd;
                }
            } catch (Exception ex) {
                System.out.println("Aviso: não foi possível verificar cliente no BD: " + ex.getMessage());
            }

            Scanner entrada = new Scanner(System.in);
            while (true) {
                System.out.println("\n--- Menu ---");
                System.out.println("1) Cadastrar cliente");
                System.out.println("2) Listar clientes");
                System.out.println("3) Listar drones");
                System.out.println("4) Realizar entrega interativa");
                System.out.println("5) Consultar histórico de cliente");
                System.out.println("6) Sair");
                System.out.print("Escolha uma opção: ");
                String opcao = entrada.nextLine();
                
                if (opcao.equals("1")) {
                    System.out.print("Nome: ");
                    String nome = entrada.nextLine();
                    System.out.print("CPF: ");
                    String cpf = entrada.nextLine();
                    System.out.print("Telefone: ");
                    String telefone = entrada.nextLine();
                    System.out.print("Email: ");
                    String email = entrada.nextLine();
                    System.out.print("Senha: ");
                    String senha = entrada.nextLine();
                    System.out.print("Rua: ");
                    String rua = entrada.nextLine();
                    System.out.print("Numero: ");
                    int numero = Integer.parseInt(entrada.nextLine());
                    System.out.print("Cidade: ");
                    String cidade = entrada.nextLine();
                    System.out.print("Estado: ");
                    String estado = entrada.nextLine();
                    System.out.print("CEP: ");
                    String cep = entrada.nextLine();

                    Endereco end = new Endereco(rua, numero, cidade, estado, cep);
                    Cliente novo = new Cliente(nome, cpf, telefone, email, senha, end);
                    try {
                        repositorioCliente.salvar(novo);
                        System.out.println("Cliente cadastrado com sucesso.");
                    } catch (Exception e) {
                        System.out.println("Falha ao cadastrar cliente: " + e.getMessage());
                    }

                } else if (opcao.equals("2")) {
                    try {
                        List<Cliente> lista = repositorioCliente.buscarTodos();
                        System.out.println("Clientes registrados: " + lista.size());
                        for (Cliente c : lista) {
                            System.out.println("- " + c.getId() + " | " + c.getNome() + " | " + c.getEmail());
                        }
                    } catch (Exception e) {
                        System.out.println("Erro ao listar clientes: " + e.getMessage());
                    }
                } else if (opcao.equals("3")) {
                    try {
                        List<Drone> ds = repositorioDrone.buscarTodos();
                        System.out.println("Drones cadastrados: " + ds.size());
                        for (Drone d : ds) {
                            System.out.println("- id=" + d.getId() + " cap=" + d.getCapacidadeCarga() + " status=" + d.getStatus() + " bateria=" + d.getBateria());
                        }
                    } catch (Exception e) {
                        System.out.println("Erro ao listar drones: " + e.getMessage());
                    }
                } else if (opcao.equals("4")) {
                    System.out.print("Email do cliente: ");
                    String emailCli = entrada.nextLine();
                    try {
                        Cliente c = repositorioCliente.buscarPorEmail(emailCli);
                        if (c == null) {
                            System.out.println("Cliente não encontrado: " + emailCli);
                            continue;
                        }
                        System.out.print("Peso da entrega (kg): ");
                        double peso = Double.parseDouble(entrada.nextLine());
                        System.out.print("Rua destino: ");
                        String ruaD = entrada.nextLine();
                        System.out.print("Numero destino: ");
                        int numD = Integer.parseInt(entrada.nextLine());
                        System.out.print("Cidade destino: ");
                        String cidadeD = entrada.nextLine();
                        System.out.print("Estado destino: ");
                        String estadoD = entrada.nextLine();
                        System.out.print("CEP destino: ");
                        String cepD = entrada.nextLine();

                        Endereco dest = new Endereco(ruaD, numD, cidadeD, estadoD, cepD);
                        Entrega entrega = c.solicitarEntrega(dest, peso);
                        try {
                            controle.armazenaDados(entrega);
                        } catch (IllegalArgumentException ex) {
                            System.out.println("Falha ao armazenar entrega: " + ex.getMessage());
                            continue;
                        }

                        System.out.print("Valor do pagamento: ");
                        double valor = Double.parseDouble(entrada.nextLine());
                        System.out.print("Método (PIX/CREDITO/DEBITO/BOLETO): ");
                        String metodo = entrada.nextLine();
                        boolean ok = controle.processarEntrega(entrega, valor, metodo, LocalDateTime.now());
                        if (!ok) {
                            System.out.println("Pagamento recusado. Entrega cancelada.");
                            continue;
                        }
                        repositorioPagamento.salvar(entrega.getPagamento(), entrega);

                        boolean atrib = controle.atribuirDrone(entrega);
                        if (atrib) {
                            System.out.println("Drone atribuído: id=" + entrega.getDrone().getId());
                        } else {
                            System.out.println("Nenhum drone disponível no momento.");
                        }

                        controle.entregar(entrega);
                        System.out.println("Entrega finalizada com id=" + entrega.getId());
                    } catch (NumberFormatException e) {
                        System.out.println("Entrada numérica inválida: " + e.getMessage());
                    } catch (Exception e) {
                        System.out.println("Erro durante entrega: " + e.getMessage());
                    }
                } else if (opcao.equals("5")) {
                    System.out.print("Email do cliente: ");
                    String email = entrada.nextLine();
                    try {
                        Cliente c = repositorioCliente.buscarPorEmail(email);
                        if (c == null) {
                            System.out.println("Cliente não encontrado: " + email);
                            continue;
                        }
                        List<Entrega> hist = controle.consultarHistorico(c);
                        System.out.println("Historico de entregas: " + hist.size());
                        for (Entrega e : hist) {
                            System.out.println("- id=" + e.getId() + " status=" + e.getStatus() + " destino=" + e.getDestino().getRua());
                        }
                    } catch (Exception e) {
                        System.out.println("Erro ao consultar histórico: " + e.getMessage());
                    }
                } else if (opcao.equals("6")) {
                    System.out.println("Saindo...");
                    break;
                } else {
                    System.out.println("Opção inválida.");
                }
            }
            entrada.close();

            System.out.println("Tentando login...");
            if (cliente.login("joao@email.com", "123456")) {
                System.out.println("Login realizado com sucesso!\n");
            }

            Entrega entrega = cliente.solicitarEntrega(endDestino, 2.5);
            repositorioEntrega.salvar(entrega);
            System.out.println("Entrega criada: peso = " + entrega.getPeso() +
                    ", destino = " + entrega.getDestino().getRua());

            System.out.println("\nProcessando pagamento...");
            boolean pagamentoOk = controle.processarEntrega(entrega, 50.0, "PIX", LocalDateTime.now());

            if (pagamentoOk) {
                System.out.println("Pagamento aprovado! Status: " + entrega.getPagamento().getStatus());
            } else {
                System.out.println("Pagamento recusado!");
            }

            Drone drone = new Drone(5.0, "DISPONIVEL", 80);
            if (drone.verificarDisponibilidade()) {
                drone.associarEntrega(entrega);
                entrega.setDrone(drone);
            }

            System.out.println("\nIniciando entrega...");
            controle.entregar(entrega);

            System.out.println("\nConsultando histórico de entregas...");
            List<Entrega> historico = cliente.consultarHistorico();
            for (Entrega e : historico) {
                System.out.println("Entrega: " + e.getId() +
                        " | Status: " + e.getStatus() +
                        " | Destino: " + e.getDestino().getRua());
            }
        } catch (Exception e) {
            System.out.println("Erro fatal: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
