import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counterNumber;
  constructor() { }

  ngOnInit() {

    const counterNumber = document.getElementById('counterNumber');

    setTimeout(function(){
      counterNumber.innerHTML = '253';
    }, 1000);
  }

}
