package service;

import service.interfaces.IRepositorioPagamento;

import entities.Pagamento;
import entities.Entrega;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class RepositorioPagamento implements IRepositorioPagamento {
    private BancoDados bancoDados;

    public RepositorioPagamento(BancoDados bancoDados) {
        this.bancoDados = bancoDados;
    }

    @Override
    public void salvar(Pagamento pagamento, Entrega entrega) throws Exception {
        if (pagamento == null) throw new IllegalArgumentException("Pagamento não pode ser nulo");
        if (pagamento.getValor() == null || pagamento.getValor() <= 0) 
            throw new IllegalArgumentException("Valor do pagamento inválido");
        if (pagamento.getMetodo() == null || pagamento.getMetodo().trim().isEmpty()) 
            throw new IllegalArgumentException("Método de pagamento inválido");

        pagamento.processarPagamento();

        try (Connection conexao = bancoDados.obterConexao()) {
            String insert = "INSERT INTO pagamentos (valor, metodo, status, data, entrega_id) VALUES (?, ?, ?, ?, ?)";
            try (PreparedStatement ps = conexao.prepareStatement(insert, Statement.RETURN_GENERATED_KEYS)) {
                ps.setDouble(1, pagamento.getValor());
                ps.setString(2, pagamento.getMetodo());
                ps.setString(3, pagamento.getStatus());
                ps.setTimestamp(4, Timestamp.valueOf(pagamento.getData()));
                if (entrega != null && entrega.getId() != null) ps.setLong(5, entrega.getId()); 
                else ps.setNull(5, Types.BIGINT);
                ps.executeUpdate();
                try (ResultSet chaves = ps.getGeneratedKeys()) {
                    if (chaves.next()) {
                        pagamento.setId(chaves.getLong(1));
                    }
                }
            }

            if (entrega != null && entrega.getId() != null) {
                String upd = "UPDATE entregas SET pagamento_status = ? WHERE id = ?";
                try (PreparedStatement ps2 = conexao.prepareStatement(upd)) {
                    ps2.setString(1, pagamento.getStatus());
                    ps2.setLong(2, entrega.getId());
                    ps2.executeUpdate();
                }
            }

            System.out.println("Pagamento salvo: id=" + pagamento.getId() + " status=" + pagamento.getStatus());
        }
    }

    @Override
    public void salvar(Pagamento pagamento) throws Exception {
        salvar(pagamento, null);
    }

    @Override
    public Pagamento buscarPorId(Long id) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, valor, metodo, status, data, entrega_id FROM pagamentos WHERE id = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setLong(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        Pagamento p = new Pagamento(rs.getDouble("valor"), rs.getString("metodo"), rs.getTimestamp("data").toLocalDateTime());
                        p.setId(rs.getLong("id"));
                        return p;
                    }
                }
            }
        }
        return null;
    }

    @Override
    public List<Pagamento> buscarTodos() throws Exception {
        List<Pagamento> lista = new ArrayList<>();
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, valor, metodo, status, data FROM pagamentos";
            try (PreparedStatement ps = conexao.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Pagamento p = new Pagamento(rs.getDouble("valor"), rs.getString("metodo"), rs.getTimestamp("data").toLocalDateTime());
                    p.setId(rs.getLong("id"));
                    lista.add(p);
                }
            }
        }
        return lista;
    }

    @Override
    public void deletar(Long id) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "DELETE FROM pagamentos WHERE id = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setLong(1, id);
                ps.executeUpdate();
                System.out.println("Pagamento deletado: id=" + id);
            }
        }
    }
}
