import { Component, Input, OnInit } from '@angular/core';
import { Meuble } from 'src/app/myClass/meuble';

@Component({
  selector: 'nes-meuble',
  templateUrl: './meuble.component.html',
  styleUrls: ['./meuble.component.css']
})
export class MeubleComponent implements OnInit {
  @Input() meu=MeubleComponent;

  pourc:number=15;
  calculerPrix(){
    var prixFina=(100-this.pourc)/100
  }
  constructor() { }

  ngOnInit(): void {
  }

}
