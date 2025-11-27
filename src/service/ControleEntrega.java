package service;

import entities.Cliente;
import entities.Drone;
import entities.Entrega;
import entities.Pagamento;

import java.time.LocalDateTime;
import java.util.List;

public class ControleEntrega {
    private RepositorioEntrega repositorioEntrega;
    private RepositorioDrone repositorioDrone;

    public ControleEntrega(BancoDados bancoDados) {
        this.repositorioEntrega = new RepositorioEntrega(bancoDados);
        this.repositorioDrone = new RepositorioDrone(bancoDados);
    }

    public void armazenaDados(Entrega entrega) throws Exception {
        if (!entrega.getDestino().validarEndereco()) {
            throw new IllegalArgumentException("Endereço inválido!");
        }
        repositorioEntrega.salvar(entrega);
    }

    public void entregar(Entrega entrega) {
        entrega.iniciar();
        System.out.println("Entrega em andamento...");
        entrega.terminar();
    }

    public List<Entrega> consultarHistorico(Cliente cliente) throws Exception {
        return repositorioEntrega.buscarPorCliente(cliente);
    }

    public boolean processarEntrega(Entrega entrega, double valor, String metodo, LocalDateTime data) {
        Pagamento pagamento = new Pagamento(valor, metodo, data);
        boolean ok = pagamento.processarPagamento();
        entrega.setPagamento(pagamento);
        return ok;
    }

    public boolean atribuirDrone(Entrega entrega) throws Exception {
        Drone drone = repositorioDrone.buscarDisponivel(entrega.getPeso());
        if (drone != null) {
            drone.associarEntrega(entrega);
            entrega.setDrone(drone);
            return true;
        }
        return false;
    }
}