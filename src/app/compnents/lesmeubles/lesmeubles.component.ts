import { Component, OnInit } from '@angular/core';
import { Meuble } from 'src/app/myClass/meuble';

@Component({
  selector: 'nes-lesmeubles',
  templateUrl: './lesmeubles.component.html',
  styleUrls: ['./lesmeubles.component.css']
})
export class LesmeublesComponent implements OnInit {
  lesmeubles:Meuble[]= [
    {name:'fauteuil', image:'assets/MyMeubles/fauteuil.jpg', price: 113.8, promotion:true, date:new Date(2020,10,1)},
    {name:'table', image:'assets/MyMeubles/table.jpg', price: 47, promotion:true, date:new Date(2020,5,12)},
    {name:'armoire', image:'assets/MyMeubles/armoire.jpg', price: 258.5, promotion: false,date:new Date(2020,10,12)}
        ];

  constructor() { }


  ngOnInit(): void {
  }

}
