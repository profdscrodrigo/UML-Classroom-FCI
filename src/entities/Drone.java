package entities;

public class Drone {
    private Long id;
    private Double capacidadeCarga;
    private String status;
    private Integer bateria;

    public Drone(Double capacidadeCarga, String status, Integer bateria) {
        this.capacidadeCarga = capacidadeCarga;
        this.status = status;
        this.bateria = bateria;
    }

    public void associarEntrega(Entrega entrega) {
        this.status = "OCUPADO";
        entrega.setDrone(this);
        System.out.println("Drone associado à entrega " + entrega.getId());
    }

    public void alteraStatus(String novoStatus) {
        this.status = novoStatus;
    }

    public boolean verificarDisponibilidade() {
        return "DISPONIVEL".equalsIgnoreCase(status) && bateria > 50;
    }

    public void receberEntrega(Entrega entrega) {
        this.status = "OCUPADO";
        System.out.println("Drone em entrega.");
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getCapacidadeCarga() {
        return capacidadeCarga;
    }

    public void setCapacidadeCarga(Double capacidadeCarga) {
        this.capacidadeCarga = capacidadeCarga;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getBateria() {
        return bateria;
    }

    public void setBateria(Integer bateria) {
        this.bateria = bateria;
    }
}