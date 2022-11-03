import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formatura',
  templateUrl: './formatura.component.html',
  styleUrls: ['./formatura.component.scss']
})
export class FormaturaComponent implements OnInit {


@Input() formatura= {
  data: 'Data: 08/05/2023',
  descricao:'',
  totalconv:'Total Convidados: 170',
  totalconf:'Yotal Confirmados: 150',
}


  constructor() { }

  ngOnInit(): void {
  }

}
