package service;

import service.interfaces.IRepositorioCliente;

import entities.Cliente;
import entities.Endereco;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class RepositorioCliente implements IRepositorioCliente {
    private BancoDados bancoDados;

    public RepositorioCliente(BancoDados bancoDados) {
        this.bancoDados = bancoDados;
    }

    @Override
    public void salvar(Cliente cliente) throws Exception {
        if (cliente == null) throw new IllegalArgumentException("Cliente não pode ser nulo");
        if (cliente.getNome() == null || cliente.getNome().trim().isEmpty()) 
            throw new IllegalArgumentException("Nome inválido");
        if (!ValidadorEntrada.cpfValido(cliente.getCpf())) 
            throw new IllegalArgumentException("CPF inválido");
        if (cliente.getEmail() == null || !cliente.getEmail().contains("@")) 
            throw new IllegalArgumentException("E-mail inválido");
        if (!ValidadorEntrada.senhaValida(cliente.getSenha())) 
            throw new IllegalArgumentException("Senha deve ter entre 6 e 12 caracteres");
        if (cliente.getEndereco() == null || !ValidadorEntrada.cepValido(cliente.getEndereco().getCep())) 
            throw new IllegalArgumentException("CEP inválido");

        if (buscarPorEmail(cliente.getEmail()) != null) {
            throw new IllegalArgumentException("Cliente já cadastrado!");
        }

        String senhaHash = UtilitarioSeguranca.gerarHash(cliente.getSenha());
        cliente.setSenha(senhaHash);

        try (Connection conexao = bancoDados.obterConexao()) {
            conexao.setAutoCommit(false);
            String insertCliente = "INSERT INTO clientes (nome, cpf, telefone, email, senha) VALUES (?, ?, ?, ?, ?)";
            try (PreparedStatement ps = conexao.prepareStatement(insertCliente, Statement.RETURN_GENERATED_KEYS)) {
                ps.setString(1, cliente.getNome());
                ps.setString(2, cliente.getCpf() != null ? cliente.getCpf() : "");
                ps.setString(3, cliente.getTelefone() != null ? cliente.getTelefone() : "");
                ps.setString(4, cliente.getEmail() != null ? cliente.getEmail() : "");
                ps.setString(5, cliente.getSenha() != null ? cliente.getSenha() : "");
                ps.executeUpdate();
                try (ResultSet chaves = ps.getGeneratedKeys()) {
                    if (chaves.next()) {
                        long id = chaves.getLong(1);
                        cliente.setId(id);
                        Endereco end = cliente.getEndereco();
                        if (end != null) {
                            String insertEnd = "INSERT INTO enderecos (cliente_id, rua, numero, cidade, estado, cep) VALUES (?, ?, ?, ?, ?, ?)";
                            try (PreparedStatement ps2 = conexao.prepareStatement(insertEnd)) {
                                ps2.setLong(1, id);
                                ps2.setString(2, end.getRua());
                                ps2.setInt(3, end.getNumero());
                                ps2.setString(4, end.getCidade());
                                ps2.setString(5, end.getEstado());
                                ps2.setString(6, end.getCep());
                                ps2.executeUpdate();
                            }
                        }
                    }
                }
            }
            conexao.commit();
            System.out.println("Cliente salvo: " + cliente.getEmail());
        }
    }

    @Override
    public Cliente buscarPorId(Long id) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, nome, cpf, telefone, email, senha FROM clientes WHERE id = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setLong(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        Cliente c = new Cliente(rs.getString("nome"), rs.getString("cpf"),
                                rs.getString("telefone"), rs.getString("email"), rs.getString("senha"), null);
                        c.setId(rs.getLong("id"));
                        return c;
                    }
                }
            }
        }
        return null;
    }

    @Override
    public Cliente buscarPorEmail(String email) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT c.id, c.nome, c.cpf, c.telefone, c.email, c.senha, " +
                    "e.rua, e.numero, e.cidade, e.estado, e.cep " +
                    "FROM clientes c LEFT JOIN enderecos e ON c.id = e.cliente_id WHERE c.email = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setString(1, email);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        Endereco endereco = null;
                        String rua = rs.getString("rua");
                        if (rua != null) {
                            endereco = new Endereco(rua, rs.getInt("numero"), rs.getString("cidade"), 
                                    rs.getString("estado"), rs.getString("cep"));
                        }
                        Cliente c = new Cliente(rs.getString("nome"), rs.getString("cpf"),
                                rs.getString("telefone"), rs.getString("email"), rs.getString("senha"), endereco);
                        c.setId(rs.getLong("id"));
                        return c;
                    }
                }
            }
        }
        return null;
    }

    @Override
    public List<Cliente> buscarTodos() throws Exception {
        List<Cliente> lista = new ArrayList<>();
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, nome, cpf, telefone, email, senha FROM clientes";
            try (PreparedStatement ps = conexao.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Cliente c = new Cliente(rs.getString("nome"), rs.getString("cpf"),
                            rs.getString("telefone"), rs.getString("email"), rs.getString("senha"), null);
                    c.setId(rs.getLong("id"));
                    lista.add(c);
                }
            }
        }
        return lista;
    }

    @Override
    public void deletar(Long id) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "DELETE FROM clientes WHERE id = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setLong(1, id);
                ps.executeUpdate();
                System.out.println("Cliente deletado: id=" + id);
            }
        }
    }
}
