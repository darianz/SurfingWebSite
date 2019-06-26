import { trigger, state, transition, style, animate } from '@angular/animations';

export let navButtonShow= trigger('navButtonShow', [

      state('void', style ({ opacity: 0 })),

      transition('void <=> *', [
        animate(2000)
      ])
    ]);


    export let fadeIn= trigger('fadeIn', [

      state('void', style ({ opacity: 0 })),

      transition('void <=> *', [
        animate(2000)
      ]),

    ]);

    export let leftToRight= trigger('leftToRight', [

      state('*',style({})),

      transition('* <=> *', [
        animate(2000)
      ]),

    ]);

    export let moveState= trigger('moveState', [

      state('leftToRight',style({})),

      transition('none => leftToRight', [
        animate(1000), style({left: '-192px'})
      ]),

      transition('none => rightToLeft', [
        animate(1000), style({left: '192px'})
      ]),

    ]);
    
    

