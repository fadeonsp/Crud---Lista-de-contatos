import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Contato } from '../models/contato.model';


@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.css']
})
export class ListaContatosComponent implements OnInit {

  // objeto array de contatos
  @Input() contatos: Contato[];
  @Output() editContato = new EventEmitter();
  @Output() deleteContato = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
  edit(contato: Contato) {
    this.editContato.emit(contato)
  }
  delete(contato: Contato) {
    this.deleteContato.emit(contato)
  }

}
