import { Component, OnInit } from '@angular/core';
import { Machine } from '../Machine';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  nom :string="";
  ip:string="";
  sysexploitation:string="";
  etat:string="";
  ips:string=""
  constructor(private machineservice:MachineService) { }

  ngOnInit(): void {
    
    // this.machineservice.getCommentaires().then((data:any)=>{  
        

       
    //   this.commentaires=data

    
    //     console.log(this.commentaires)
     
    // }
    // ) 
  }

  OnSubmit() {
    const machine : Machine = {
         
            nom:this.nom,
            addresseip:this.ip,
            sysexploitation:this.sysexploitation,
            etat:this.etat
    }
    
   this.machineservice.addMachine(machine).then(()=>alert("machine added"))
  
  }

  Supprimer() {
    const ip= this.ips
    this.machineservice.deleteMachine(ip).then(()=>alert("machine supprimee"))
   //this.machineservice.addMachine(machine).then(()=>alert("machine added"))
  
  }
}
