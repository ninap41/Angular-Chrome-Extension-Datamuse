import {trigger, animate, style, keyframes, state, group, animateChild, query, stagger, transition, AnimationEvent } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })
        , { optional: true }),
        group([

            query(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
            ], { optional: true }),

            query(':leave', [
                style({ transform: 'translateX(0%)' }),
                animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
            ], { optional: true }),

        ]),
    ]),
]);

export const spinnerFade =
     trigger('spinnerFade', [
            state('show',
            style({
                opacity: 1, 
                position: 'fixed'})
          ),
            state('hide', style({
              opacity: 0,
              position: 'fixed'
            })),
            transition('show => hide', animate('500ms ease-out')),
            transition('hide => show', animate('500ms ease-in'))
    ]);

export const listAnimation = 
trigger('listAnimation', [
    transition('* => *', [
      query(':enter', style({ opacity: 0 }), {optional: true}),
      query(':enter', stagger('100ms', [
        animate('.3s ease-in', keyframes([
          style({opacity: 0, transform: 'translateY(-25%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
        ]))]), {optional: true})
    ])
  ])