package entities;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

public class Pagamento {
    private Long id;
    private Double valor;
    private String status;
    private String metodo;
    private LocalDateTime data;

    private static final List<String> METODOS_ACEITOS = Arrays.asList("PIX", "CREDITO", "DEBITO", "BOLETO");

    public Pagamento(Double valor, String metodo, LocalDateTime data) {
        this.valor = valor;
        this.metodo = metodo;
        this.status = "PENDENTE";
        this.data = LocalDateTime.now();
    }

    public boolean processarPagamento() {
        if (valor == null || valor <= 0) {
            this.status = "RECUSADO";
            return false;
        }
        if (!METODOS_ACEITOS.contains(metodo.toUpperCase())) {
            this.status = "RECUSADO";
            return false;
        }
        this.status = "APROVADO";
        this.data = LocalDateTime.now();
        return true;
    }

    public Double getValor() {
        return valor;
    }

    public String getStatus() {
        return status;
    }

    public String getMetodo() {
        return metodo;
    }

    public LocalDateTime getData() {
        return data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}