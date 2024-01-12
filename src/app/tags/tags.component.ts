import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { RouterModule } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
// export class TagsComponent implements OnInit {

//   @Input()
//   foodPageTags?:string[];

//   tags?: Tag[] ;
//   constructor(private foodService:FoodService) {

//   }

//   ngOnInit(): void {
//     if(!this.foodPageTags){
//       this.tags = this.foodService.getAllTags();
//     }
    
      
//   }
// }



export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];

  
  tags?:Tag[];

  @Input()
  justifyContent:string = 'center';

  
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
     this.tags = this.foodService.getAllTags();
  }

}