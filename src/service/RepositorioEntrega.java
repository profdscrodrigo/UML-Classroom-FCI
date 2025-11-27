package service;

import service.interfaces.IRepositorioEntrega;

import entities.Entrega;
import entities.Endereco;
import entities.Cliente;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class RepositorioEntrega implements IRepositorioEntrega {
    private BancoDados bancoDados;

    public RepositorioEntrega(BancoDados bancoDados) {
        this.bancoDados = bancoDados;
    }

    @Override
    public void salvar(Entrega entrega) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String insert = "INSERT INTO entregas (peso, cliente_id, destino_rua, destino_numero, destino_cidade, destino_estado, destino_cep, status, pagamento_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
            try (PreparedStatement ps = conexao.prepareStatement(insert, Statement.RETURN_GENERATED_KEYS)) {
                ps.setDouble(1, entrega.getPeso());
                Cliente c = entrega.getCliente();
                if (c != null && c.getId() != null) ps.setLong(2, c.getId()); 
                else ps.setNull(2, Types.BIGINT);
                ps.setString(3, entrega.getDestino().getRua());
                ps.setInt(4, entrega.getDestino().getNumero());
                ps.setString(5, entrega.getDestino().getCidade());
                ps.setString(6, entrega.getDestino().getEstado());
                ps.setString(7, entrega.getDestino().getCep());
                ps.setString(8, entrega.getStatus());
                ps.setString(9, entrega.getPagamento() != null ? entrega.getPagamento().getStatus() : "PENDENTE");
                ps.executeUpdate();
                try (ResultSet chaves = ps.getGeneratedKeys()) {
                    if (chaves.next()) {
                        long id = chaves.getLong(1);
                        entrega.setId(id);
                    }
                }
            }
            System.out.println("Entrega salva: id=" + entrega.getId());
        }
    }

    @Override
    public List<Entrega> buscarPorCliente(Cliente cliente) throws Exception {
        List<Entrega> historico = new ArrayList<>();
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, peso, destino_rua, destino_numero, destino_cidade, destino_estado, destino_cep, status, pagamento_status FROM entregas WHERE cliente_id = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setLong(1, cliente.getId());
                try (ResultSet rs = ps.executeQuery()) {
                    while (rs.next()) {
                        Entrega e = new Entrega(rs.getDouble("peso"), new Endereco(rs.getString("destino_rua"), rs.getInt("destino_numero"), rs.getString("destino_cidade"), rs.getString("destino_estado"), rs.getString("destino_cep")), cliente);
                        e.setId(rs.getLong("id"));
                        e.setStatus(rs.getString("status"));
                        historico.add(e);
                    }
                }
            }
        }
        return historico;
    }

    @Override
    public Entrega buscarPorId(Long id) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, peso, cliente_id, destino_rua, destino_numero, destino_cidade, destino_estado, destino_cep, status FROM entregas WHERE id = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setLong(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        long clienteId = rs.getLong("cliente_id");
                        Cliente cliente = new Cliente("", "", "", "", "", null);
                        cliente.setId(clienteId);
                        Entrega e = new Entrega(rs.getDouble("peso"), new Endereco(rs.getString("destino_rua"), rs.getInt("destino_numero"), rs.getString("destino_cidade"), rs.getString("destino_estado"), rs.getString("destino_cep")), cliente);
                        e.setId(rs.getLong("id"));
                        e.setStatus(rs.getString("status"));
                        return e;
                    }
                }
            }
        }
        return null;
    }

    @Override
    public List<Entrega> buscarTodos() throws Exception {
        List<Entrega> lista = new ArrayList<>();
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, peso, cliente_id, destino_rua, destino_numero, destino_cidade, destino_estado, destino_cep, status FROM entregas";
            try (PreparedStatement ps = conexao.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    long clienteId = rs.getLong("cliente_id");
                    Cliente cliente = new Cliente("", "", "", "", "", null);
                    cliente.setId(clienteId);
                    Entrega e = new Entrega(rs.getDouble("peso"), new Endereco(rs.getString("destino_rua"), rs.getInt("destino_numero"), rs.getString("destino_cidade"), rs.getString("destino_estado"), rs.getString("destino_cep")), cliente);
                    e.setId(rs.getLong("id"));
                    e.setStatus(rs.getString("status"));
                    lista.add(e);
                }
            }
        }
        return lista;
    }

    @Override
    public void deletar(Long id) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "DELETE FROM entregas WHERE id = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setLong(1, id);
                ps.executeUpdate();
                System.out.println("Entrega deletada: id=" + id);
            }
        }
    }
}
