package entities;

import java.util.ArrayList;
import java.util.List;

public class Cliente {
    private Long id;
    private String nome;
    private String cpf;
    private String telefone;
    private String email;
    private String senha;
    private Endereco endereco;
    private List<Entrega> historico = new ArrayList<>();

    public Cliente(String nome, String cpf, String telefone, String email, String senha, Endereco endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
    }

    public Entrega solicitarEntrega(Endereco destino, double peso) {
        Entrega entrega = new Entrega(peso, destino, this);
        historico.add(entrega);
        return entrega;
    }

    public List<Entrega> consultarHistorico() {
        return historico;
    }

    public boolean login(String email, String senha) {
        if (!this.email.equals(email)) return false;
        // senha armazenada pode ser hash. Verifica com UtilitarioSeguranca
        try {
            return service.UtilitarioSeguranca.verificarSenha(this.senha, senha);
        } catch (Exception e) {
            return false;
        }
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCpf() {
        return cpf;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}