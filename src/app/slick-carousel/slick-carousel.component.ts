import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slick-carousel',
  templateUrl: './slick-carousel.component.html',
  styleUrls: ['./slick-carousel.component.scss']
})
export class SlickCarouselComponent implements OnInit {

  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];
  
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 4};

  constructor() { }

  ngOnInit() {
  }

  addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

}
