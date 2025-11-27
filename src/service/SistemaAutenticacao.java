package service;

import entities.Cliente;
import entities.Endereco;

import java.util.ArrayList;
import java.util.List;

public class SistemaAutenticacao {
    private List<Cliente> clientes = new ArrayList<>();

    public Cliente criarCliente(String nome, String cpf, String telefone, String email, Endereco endereco, String senha) {
        if (nome == null) {
            throw new IllegalArgumentException("Nome inválido!");
        }
        if (cpf == null) {
            throw new IllegalArgumentException("CPF inválido!");
        }
        if (telefone == null) {
            throw new IllegalArgumentException("Telefone inválido!");
        }
        if (email == null) {
            throw new IllegalArgumentException("E-mail inválido!");
        }
        if (senha == null || senha.length() < 6) {
            throw new IllegalArgumentException("Senha deve ter pelo menos 6 caracteres!");
        }
        if (endereco == null || !endereco.validarEndereco()) {
            throw new IllegalArgumentException("Endereço inválido!");
        }

        Cliente cliente = new Cliente(nome, cpf, telefone, email, senha, endereco);
        clientes.add(cliente);
        return cliente;
    }

    public boolean autenticarCliente(String email, String senha) {
        for (Cliente c : clientes) {
            if (c.login(email, senha)) {
                return true;
            }
        }
        return false;
    }
}
