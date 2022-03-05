import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }

  tabuada() {
    var numero = 5;
  
    for (var i=1; i<11; i++) {
      document.write(numero + " x " + i + " = " + (numero*i) + "<br>");
      
    }
  }
  
}