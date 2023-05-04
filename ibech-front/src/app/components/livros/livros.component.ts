import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { livros } from 'src/app/models/livros';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
  ELEMENT_DATA: livros[] = [
    {
      autor: 'nome do autor',
      titulo: 'O menino do pijama listrado',
      disponivel: '7'
    }
  ]

  displayedColumns: string[] = ['autor', 'titulo', 'disponivel'];
  dataSource = new MatTableDataSource<livros>(this.ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

