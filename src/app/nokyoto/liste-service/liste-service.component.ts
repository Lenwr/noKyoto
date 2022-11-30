import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-liste-service',
  templateUrl: './liste-service.component.html',
  styleUrls: ['./liste-service.component.css']
})
export class ListeServiceComponent implements OnInit {
  
  Liste : (any | undefined)[] = []
  schema : (any | undefined)[] = []
  listeSousPartie : (any | undefined)[] = []
  

  constructor(private _DataService: DataService) {
    console.log(this.Liste)
  }

  ngOnInit(): void {
    this.Liste = this._DataService.getListe()
    this.schema = this._DataService.getSchema()
    this.listeSousPartie = this._DataService.getlisteSousPartie()

  }

}
