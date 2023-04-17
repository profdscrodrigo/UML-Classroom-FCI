package br.com.mack.ibech.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.mack.ibech.domain.Fornecedor;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Integer>{

	Optional<Fornecedor> findByEmail(String email);

	Optional<Fornecedor> findByCnpj(String cnpj);
	
}
