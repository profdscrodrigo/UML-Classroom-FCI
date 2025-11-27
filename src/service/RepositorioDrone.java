package service;

import service.interfaces.IRepositorioDrone;

import entities.Drone;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class RepositorioDrone implements IRepositorioDrone {
    private BancoDados bancoDados;

    public RepositorioDrone(BancoDados bancoDados) {
        this.bancoDados = bancoDados;
    }

    @Override
    public void salvar(Drone drone) throws Exception {
        if (drone == null) throw new IllegalArgumentException("Drone não pode ser nulo");
        if (drone.getCapacidadeCarga() == null || drone.getCapacidadeCarga() <= 0) 
            throw new IllegalArgumentException("Capacidade do drone inválida");
        if (drone.getBateria() == null || drone.getBateria() < 0 || drone.getBateria() > 100) 
            throw new IllegalArgumentException("Nível de bateria inválido");

        try (Connection conexao = bancoDados.obterConexao()) {
            String insert = "INSERT INTO drones (capacidade, status, bateria) VALUES (?, ?, ?)";
            try (PreparedStatement ps = conexao.prepareStatement(insert, Statement.RETURN_GENERATED_KEYS)) {
                ps.setDouble(1, drone.getCapacidadeCarga());
                ps.setString(2, drone.getStatus() != null ? drone.getStatus() : "DISPONIVEL");
                ps.setInt(3, drone.getBateria());
                ps.executeUpdate();
                try (ResultSet chaves = ps.getGeneratedKeys()) {
                    if (chaves.next()) {
                        drone.setId(chaves.getLong(1));
                    }
                }
            }
            System.out.println("Drone salvo: id=" + drone.getId());
        }
    }

    @Override
    public Drone buscarDisponivel(double peso) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, capacidade, status, bateria FROM drones WHERE status = 'DISPONIVEL' AND capacidade >= ? ORDER BY capacidade ASC LIMIT 1";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setDouble(1, peso);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        Drone d = new Drone(rs.getDouble("capacidade"), rs.getString("status"), rs.getInt("bateria"));
                        d.setId(rs.getLong("id"));
                        return d;
                    }
                }
            }
        }
        return null;
    }

    @Override
    public List<Drone> buscarTodos() throws Exception {
        List<Drone> lista = new ArrayList<>();
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, capacidade, status, bateria FROM drones";
            try (PreparedStatement ps = conexao.prepareStatement(sql); ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Drone d = new Drone(rs.getDouble("capacidade"), rs.getString("status"), rs.getInt("bateria"));
                    d.setId(rs.getLong("id"));
                    lista.add(d);
                }
            }
        }
        return lista;
    }

    @Override
    public void semearDronesPadrao() throws Exception {
        List<Drone> existentes = buscarTodos();
        if (existentes != null && !existentes.isEmpty()) {
            System.out.println("Drones já cadastrados: " + existentes.size());
            return;
        }

        Drone d1 = new Drone(5.0, "DISPONIVEL", 90);
        Drone d2 = new Drone(2.5, "DISPONIVEL", 80);
        Drone d3 = new Drone(10.0, "MANUTENCAO", 40);
        Drone d4 = new Drone(8.0, "DISPONIVEL", 75);

        salvar(d1);
        salvar(d2);
        salvar(d3);
        salvar(d4);
        System.out.println("Drones pré-cadastrados.");
    }

    @Override
    public Drone buscarPorId(Long id) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "SELECT id, capacidade, status, bateria FROM drones WHERE id = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setLong(1, id);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) {
                        Drone d = new Drone(rs.getDouble("capacidade"), rs.getString("status"), rs.getInt("bateria"));
                        d.setId(rs.getLong("id"));
                        return d;
                    }
                }
            }
        }
        return null;
    }

    @Override
    public void deletar(Long id) throws Exception {
        try (Connection conexao = bancoDados.obterConexao()) {
            String sql = "DELETE FROM drones WHERE id = ?";
            try (PreparedStatement ps = conexao.prepareStatement(sql)) {
                ps.setLong(1, id);
                ps.executeUpdate();
                System.out.println("Drone deletado: id=" + id);
            }
        }
    }
}
