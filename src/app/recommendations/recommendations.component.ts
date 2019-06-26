import { Component, OnInit } from '@angular/core';
import {cardModel} from './cardModel';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { fadeIn, leftToRight, moveState } from '../animations';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  animations:[
    fadeIn,
    leftToRight,
    moveState
  ]
})
export class RecommendationsComponent implements OnInit {
  obj;
  stateName = 'none';
  example1 = new cardModel('example1', '../../assets/Shta.jpg', 'dummy text 1','dwad');
  example2 = new cardModel('example2', '../../assets/Shta.jpg', 'dummy text 2','dwad');
  example3 = new cardModel('example3', '../../assets/Shta.jpg', 'dummy text 3','dwad');
  example4 = new cardModel('example4', '../../assets/Shta.jpg', 'dummy text 4','dwad');
  recommendations = [this.example1, this.example2, this.example3, this.example4]; 
   box;
   left = '-192px';
  constructor() {

    

   }

  ngOnInit() {

  }
  LeftClick() {
  
    this.stateName = 'leftToRight';
    setTimeout(()=>{
      this.obj = this.recommendations.shift();
      this.recommendations.push(this.obj);
      this.stateName = 'none';
    } , 1000);

  }

  RightClick()  {

    this.stateName = 'rightToLeft';
    setTimeout(()=>{
      this.obj = this.recommendations.pop();
      this.recommendations.unshift(this.obj);
      this.stateName = 'none';
    } , 1000);
    
  }
}

