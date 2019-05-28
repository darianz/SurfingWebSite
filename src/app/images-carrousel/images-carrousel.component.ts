import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-images-carrousel',
  templateUrl: './images-carrousel.component.html',
  styleUrls: ['./images-carrousel.component.scss'],

})
export class ImagesCarrouselComponent implements OnInit {
 
 carrouselImages = ['Airal.jpg', 'Shta.jpg', 'ass.jpg' , 'ass.jpg' , 'ass.jpg', 'ass.jpg'];
  constructor() { }

  ngOnInit() {
  }

}
