package br.com.mack.ibech.services;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mack.ibech.domain.Fornecedor;
import br.com.mack.ibech.domain.dtos.FornecedorDTO;
import br.com.mack.ibech.repositories.FornecedorRepository;
import br.com.mack.ibech.services.exceptions.DataIntegrityViolationException;
import br.com.mack.ibech.services.exceptions.ObjectNotFoundException;

@Service
public class FornecedorService {
	@Autowired
	private FornecedorRepository fornecedorRepository;

	public Fornecedor findById(Integer id) {
		Optional<Fornecedor> tecnico = fornecedorRepository.findById(id);
		return tecnico.orElseThrow(() -> new ObjectNotFoundException("Objeto Não Encontrado! Id: " + id));
	}

	public List<Fornecedor> findAll() {
		return fornecedorRepository.findAll();
	}

	public Fornecedor create(FornecedorDTO tecDTO) {
		tecDTO.setId(null);
		validaPorCpfEEmail(tecDTO);
		Fornecedor tec = new Fornecedor(tecDTO);
		return fornecedorRepository.save(tec);
	}

	private void validaPorCpfEEmail(FornecedorDTO tecDTO) {
		Optional<Fornecedor> pes = fornecedorRepository.findByCnpj(tecDTO.getCnpj());
		if (pes.isPresent() && pes.get().getId() != tecDTO.getId()) {
			throw new DataIntegrityViolationException("CPF já cadastrado no sistema!");
		}

		pes = fornecedorRepository.findByEmail(tecDTO.getEmail());
		if (pes.isPresent() && pes.get().getId() != tecDTO.getId()) {
			throw new DataIntegrityViolationException("E-mail já cadastrado no sistema!");
		}
	}

	public Fornecedor update(Integer id, @Valid FornecedorDTO objDTO) {
		objDTO.setId(id);
		Fornecedor oldObj = this.findById(id);
		this.validaPorCpfEEmail(objDTO);
		oldObj = new Fornecedor(objDTO);
		return fornecedorRepository.save(oldObj);
	}

	public void delete(Integer id) {
		Fornecedor obj = this.findById(id);
//		if (obj.getChamados().size() > 0) {
//			throw new DataIntegrityViolationException("Técnico possui ordens de serviço e não pode ser deletado!");
//		}
		fornecedorRepository.delete(obj);
	}
}
