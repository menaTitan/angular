import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
} )
export class AppComponent {
  title = 'GameEmitter';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  primeNumbers: number[] = [];
  isPrime: boolean = false;
  onIntervalFired(firedNumber: number){
    console.log(firedNumber);
    if(firedNumber % 2 === 0){
       this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
    
    this.primeChecker(firedNumber)
    
  }

  primeChecker(number:number): void{
    var flag  = false;
    for(var i = 2; i < number; i++){
      if(number % i === 0 ){
        flag =  false;
      }else{
        flag = true;
      }
    }
    if(flag){
      console.log( "the number is " + number)
      this.primeNumbers.push(number);
    }
      
  }
}

