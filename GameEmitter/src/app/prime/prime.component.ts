import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {

  constructor() { }
  @Input() number: number = 0;
  ngOnInit(): void {
  }

}
