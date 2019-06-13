import { Component, OnInit } from '@angular/core';
import {cardModel} from './cardModel';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {

  example1 = new cardModel('example1', '../../assets/Shta.jpg', 'dummy text 1','dwad');
  example2 = new cardModel('example2', '../../assets/Shta.jpg', 'dummy text 2','dwad');
  recommendations = [this.example1, this.example2]; 
   
  constructor() {

    

   }

  ngOnInit() {

  }

}

