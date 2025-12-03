public class Produto {
    private int id;
    private String nome;
    private double preco;
    private double peso;

    public Produto(int id, String nome, double preco, double peso) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.peso = peso;
    }

    public int getId() { return id; }
    public double getPreco() { return preco; }
    public double getPeso() { return peso; }
    public String getNome() { return nome; }
}