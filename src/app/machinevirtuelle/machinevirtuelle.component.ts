import { Component, Input, OnInit } from '@angular/core';
import { Machine } from '../Machine';

@Component({
  selector: 'app-machinevirtuelle',
  templateUrl: './machinevirtuelle.component.html',
  styleUrls: ['./machinevirtuelle.component.css']
})
export class MachinevirtuelleComponent implements OnInit {
  @Input() machine! : Machine;
  on:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  couleur:boolean=true;
Arreter(){
  this.couleur=!this.couleur;
  if( this.couleur){
    alert("machine demaree")
    this.machine.etat=="demmarer";
  }
  else{ 
    alert("machine fermee")
    this.machine.etat=="fermer";
    
  }
}
}

