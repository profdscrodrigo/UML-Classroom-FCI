package br.com.mack.ibech.resources;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.mack.ibech.domain.Fornecedor;
import br.com.mack.ibech.domain.dtos.FornecedorDTO;
import br.com.mack.ibech.services.FornecedorService;

@RestController
@RequestMapping(value = "/fornecedores")
public class FornecedorResource {
		
		@Autowired
		private FornecedorService tecnicoService;
		
		@GetMapping(value = "/{id}")
		public ResponseEntity<FornecedorDTO> findById(@PathVariable Integer id) {
			Fornecedor tecnico = this.tecnicoService.findById(id);
			return ResponseEntity.ok().body(new FornecedorDTO(tecnico));
		}

		@GetMapping
		public ResponseEntity<List<FornecedorDTO>> findAll(){
			List<Fornecedor> list = tecnicoService.findAll();
			List<FornecedorDTO> listDTO = list.stream().map(t -> new FornecedorDTO(t)).collect(Collectors.toList());
			return ResponseEntity.ok().body(listDTO);
		}
		
		@PostMapping
		public ResponseEntity<FornecedorDTO> create(@Valid @RequestBody FornecedorDTO tecDTO){
			Fornecedor tec = tecnicoService.create(tecDTO);
			URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(tec.getId()).toUri();
			return ResponseEntity.created(uri).build();
		}
		
		@PutMapping(value = "/{id}")
		public ResponseEntity<FornecedorDTO> update(@PathVariable Integer id, @Valid @RequestBody FornecedorDTO objDTO){	
			Fornecedor obj = tecnicoService.update(id, objDTO);
			return ResponseEntity.ok().body(new FornecedorDTO(obj));
		}
		
		@DeleteMapping(value = "/{id}")
		public ResponseEntity<FornecedorDTO> delete(@PathVariable Integer id){
			tecnicoService.delete(id);
			return ResponseEntity.noContent().build();
		}
	
}
