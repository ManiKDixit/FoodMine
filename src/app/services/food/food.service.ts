import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll() : String[]{
    return [
      'assets/images/img_1_pizza.jpg',
      'assets/images/img_2_burger.jpeg',
      'assets/images/img_3_cake.jpeg',
      'assets/images/img_4_macroons.jpeg',
      'assets/images/img_5_dumplings.jpeg',
      'assets/images/img_6_Ramen.jpeg',
      'assets/images/img_7_Spaghetti.jpeg',
      'assets/images/img_8_Samosa.jpeg',
      'assets/images/img_9_Paneer.jpg',
      'assets/images/img_10_pancakes.jpg',
      
    ]
  }
}
