import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { navButtonShow} from '../animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    navButtonShow,
  
  ]
})


export class NavbarComponent implements OnInit {
  
  @ViewChild('stickyMenu') menuElement: ElementRef;
  state: any;
  sticky: boolean = false;
  menuPosition: any;

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
        const windowScroll = window.pageYOffset;
        if(windowScroll >= this.menuPosition){
            this.sticky = true;
        } else {
            this.sticky = false;
        }
    }


  constructor() { }

  ngOnInit() {


  }

  ngAfterViewInit(){
    this.menuPosition = this.menuElement.nativeElement.offsetTop
}

  ClickAnimation() {
     alert('button clicked');
     this.state = 'clicked';

  }

}


// CSS FOR STICKY NAVBAR
// #navbar {
//   overflow: hidden;
//   background-color: #333;
// }
// .sticky {
//   position: fixed;
//   top: 0;
//   width: 100%;
// }

// .sticky + .content {
//   padding-top: 60px;
// }

// JS FOR STICKY NAVBAR
// <script>
// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// </script>


//  ANIMATION BUTTON JS 
//     var $button = document.querySelector('.button');
// $button.addEventListener('click', function() {
//   var duration = 0.3,
//       delay = 0.08;
//   TweenMax.to($button, duration, {scaleY: 1.6, ease: Expo.easeOut});
//   TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
//   TweenMax.to($button, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
// });
