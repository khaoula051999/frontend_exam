import { Component, OnInit } from '@angular/core';
import { Machine } from '../Machine';
import { MachineService } from '../machine.service';

@Component({
  selector: 'app-listmachine',
  templateUrl: './listmachine.component.html',
  styleUrls: ['./listmachine.component.css']
})
export class ListmachineComponent implements OnInit {
  machines : Array<Machine>=[];

  constructor(private machineservice:MachineService) { }

  ngOnInit(): void {

    this.machineservice.getMachines().then((data:any)=>{  
        

       
      this.machines=data

    
        console.log(this.machines)
     
    }
    )     
  }

}
