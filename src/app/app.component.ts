import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'Counter';
  count:number=0;

  increasecount = ()=>{
    if(this.count<100){
      this.count+=1; 
    }
    else{
      this.count=this.count
    }
     
  }

  decreasecount = ()=>{
    if(this.count>0){
    this.count-=1;
    }
    else{
      this.count=this.count
    }
  }
  handlereset= ()=>{
    this.count=0;
  }
}
