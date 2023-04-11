import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { pedidos } from 'src/app/models/pedidos';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  ELEMENT_DATA: pedidos[] = [
    {
      autor: 'nid',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    }, {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    },
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      dataCriacao: '13/09/2023'
    }
    

  ]

  displayedColumns: string[] = ['autor', 'titulo', 'acoes'];
  dataSource = new MatTableDataSource<pedidos>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
  }
  



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
