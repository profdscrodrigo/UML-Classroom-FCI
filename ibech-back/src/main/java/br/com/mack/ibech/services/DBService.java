package br.com.mack.ibech.services;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.mack.ibech.domain.Cliente;
import br.com.mack.ibech.domain.Fornecedor;
import br.com.mack.ibech.repositories.ClienteRepository;
import br.com.mack.ibech.repositories.FornecedorRepository;


@Service
public class DBService {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private FornecedorRepository fornecedorRepository;
	
	@Autowired
	private BCryptPasswordEncoder encoder;

	public void instaciaDB() {
		
		Cliente cli1 = new Cliente(null, "admin", "14868316052", "admin@gmail.com", encoder.encode("admin"));
		clienteRepository.saveAll(Arrays.asList(cli1));
		
		Fornecedor forn1 = new Fornecedor(null, "Fornecedor 01", "66162132000128", "fornecedor01@gmail.com.br");
		fornecedorRepository.saveAll(Arrays.asList(forn1));
		
	}
	
}
