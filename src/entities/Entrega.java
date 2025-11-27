package entities;

import java.time.LocalDateTime;

public class Entrega {
    private Long id;
    private Double peso;
    private String status;
    private LocalDateTime data;
    private Endereco destino;
    private Cliente cliente;
    private Pagamento pagamento;
    private Drone drone;

    public Entrega(Double peso, Endereco destino, Cliente cliente) {
        this.peso = peso;
        this.destino = destino;
        this.cliente = cliente;
        this.status = "AGUARDANDO";
        this.data = LocalDateTime.now();
    }

    public void iniciar() {
        this.status = "EM_ANDAMENTO";
        System.out.println("Entrega iniciada!");
    }

    public void terminar() {
        this.status = "FINALIZADA";
        System.out.println("Entrega concluída!");
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPeso() {
        return peso;
    }

    public void setPeso(Double peso) {
        this.peso = peso;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getData() {
        return data;
    }

    public void setData(LocalDateTime data) {
        this.data = data;
    }

    public Endereco getDestino() {
        return destino;
    }

    public void setDestino(Endereco destino) {
        this.destino = destino;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public Pagamento getPagamento() {
        return pagamento;
    }

    public void setPagamento(Pagamento pagamento) {
        this.pagamento = pagamento;
    }

    public Drone getDrone() {
        return drone;
    }

    public void setDrone(Drone drone) {
        this.drone = drone;
    }
}