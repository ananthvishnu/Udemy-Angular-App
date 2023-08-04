import { Component } from "@angular/core";

@Component({
selector:"app-server",
templateUrl:"./server.component.html",
styles:[`.onLine{
  color:white
}`]


})

export class serverComponent {
//creating a ts variables && write business logics to create dynamic page 
serverId:number = 10;
serverStatus:string = "offline"

constructor () {
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
}


getColor(){
  return this.serverStatus === 'online' ? 'green' : 'red'
}

getServerStatus(){
return this.serverStatus

}

//property binding example function
allowNewServer:boolean = false

// constructor () {
//   setTimeout(() => {
// this.allowNewServer = true
//   },2000)
// }

//event binding function
serverCreationStatus = "No server was created"

onCreateServer(){
    this.serverCreated = true
    this.serverCreationStatus = "server was created name is : " + this.serverName
}

//Passing and using Data with Event binding function
serverName = "servername";

// onUpdateServerName(event:Event){
// this.serverName = (<HTMLInputElement>event.target).value
// }

userName = ""

serverCreated = false;




}