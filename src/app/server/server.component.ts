import { Component } from "@angular/core";

@Component({
selector:"app-server",
templateUrl:"./server.component.html",
styleUrls:["./server.component.css"]


})

export class serverComponent {
//creating a ts variables && write business logics to create dynamic page 
serverId:number = 10;
serverStatus:string = "offline"

getServerStatus(){
return this.serverStatus

}

//property binding example function
allowNewServer:boolean = false

constructor () {
  setTimeout(() => {
this.allowNewServer = true
  },2000)
}

//event binding function
serverCreationStatus = "No server was created"

onCreateServer(){
    this.serverCreationStatus = "server was created name is : " + this.serverName
}

//Passing and using Data with Event binding function
serverName = "servername";

onUpdateServerName(event:Event){
this.serverName = (<HTMLInputElement>event.target).value

}

}