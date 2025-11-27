package service.interfaces;

import entities.Drone;
import java.util.List;

public interface IRepositorioDrone extends IRepositorio<Drone> {
    Drone buscarDisponivel(double peso) throws Exception;
    List<Drone> buscarTodos() throws Exception;
    void semearDronesPadrao() throws Exception;
}
