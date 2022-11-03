import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-listar-formatura',
  templateUrl: './listar-formatura.component.html',
  styleUrls: ['./listar-formatura.component.scss']
})
export class ListarFormaturaComponent implements OnInit {

listaFormatura=[];

  constructor(private service: Pensamentoservice) {
  }

  ngOnInit(): void {
  }

}
export interface formatura {
  {
    id_data:
  }
}
