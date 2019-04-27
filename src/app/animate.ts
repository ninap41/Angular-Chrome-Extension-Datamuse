import {trigger, animate, style, state, group, animateChild, query, stagger, transition} from '@angular/animations';

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


// export const spinnerFade = //work on.
//     trigger('isSpinnerOpen', [
//         // ...
//         state('true', style({
//           opacity: 1,
//         })),
//         state('false', style({
//           opacity: 0,
//         })),
//         transition('true => false', [
//           animate('2s')
//         ]),
//         transition('false => true', [
//           animate('2s')
//         ]),
//       ]);
