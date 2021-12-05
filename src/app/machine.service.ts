import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Machine } from './Machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) { }

  addMachine(machine : Machine){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(machine);
    console.log(body)
    return this.http.post(`http://localhost:3001/machine`, body,{'headers':headers}).toPromise()
    .then((response:any)=>response)
    .catch((err)=>console.log(err));
  }
  deleteMachine(ip:string){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(ip);
    console.log(body)
    return this.http.delete(`http://localhost:3001/machine`,{'headers':headers}).toPromise()
    .then((response:any)=>response)
    .catch((err)=>console.log(err));
  }
  getMachines(){

    return this.http.get<Array<Machine>>(`http://localhost:3001/machine`).toPromise()
    .then((res: any)=>res).catch(err=>console.log(err))
    
  
   }
}
