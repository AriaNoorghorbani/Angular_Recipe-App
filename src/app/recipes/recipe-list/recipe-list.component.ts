import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/interface';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[] = [{
    name: 'Soup',
    description: 'Soup is delicios Food',
    imagePath: 'https://media.baamboozle.com/uploads/images/152185/1607591595_198751',
  },
  {
    name: 'Pide',
    description: 'Pide is delicios Food',
    imagePath: 'http://cdn.cnn.com/cnnnext/dam/assets/200402101927-18-best-turkish-foods-lahmacun-super-tease.jpg',
  }
  ]

  constructor() {
}

  ngOnInit(): void {
  }

}
