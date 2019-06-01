import { Component, OnInit } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {

  onMouse (iconImageElement, color) {
    const enteredElement = document.querySelectorAll(`.icon__img--${iconImageElement}`);

    setTimeout(function () {
      enteredElement.forEach(function (el) {
        el.setAttribute('style', `fill:${color} !important`);
      })
    }, 500)
  }

  constructor() { }

  ngOnInit() {
  }

}
