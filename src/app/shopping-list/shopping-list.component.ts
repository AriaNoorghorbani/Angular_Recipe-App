import { Component, OnInit } from '@angular/core';
import { ingredients } from 'src/app/shared/interface'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : ingredients [] = [
    {name: 'apple',
    amount: 5},
    {name: 'banana',
    amount: 2}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
