import { trigger, state, transition, style, animate } from '@angular/animations';

export let navButtonShow= trigger('navButtonShow', [

      state('void', style ({ opacity: 0 })),

      transition('void <=> *', [
        animate(2000)
      ])
    ]);
  

