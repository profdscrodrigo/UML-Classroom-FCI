public class Drone {
    private int id;
    private int bateria;
    private double capacidadePeso;

    public Drone(int id, int bateria, double capacidadePeso) {
        this.id = id;
        this.bateria = bateria;
        this.capacidadePeso = capacidadePeso;
    }

    public int getIdDrone() {
        return id;
    }

    public int getBateria() {
        return bateria;
    }

    public double getCapacidadePeso() {
        return capacidadePeso;
    }

    public boolean validarPeso(double peso) {
        return peso <= capacidadePeso;
    }

    public boolean validarBateria() {
        return bateria >= 25;
    }
}