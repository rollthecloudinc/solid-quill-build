import { MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_TRIGGER, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger } from "@nf-internal/chunk-RJZDMP37";
import "@nf-internal/chunk-VARRHIR3";
import "@nf-internal/chunk-5UAVXUH3";
import "@nf-internal/chunk-JH7AURNV";
import { MatOptgroup, MatOption } from "@nf-internal/chunk-R4XIJI6B";
import "@nf-internal/chunk-6JXXSC2B";
import "@nf-internal/chunk-LTTGRATQ";
import { MatError, MatFormField, MatHint, MatLabel, MatPrefix, MatSuffix } from "@nf-internal/chunk-Y4PYHPLA";
import "@nf-internal/chunk-ZX5TUROT";
import "@nf-internal/chunk-6M43UBJD";
import "@nf-internal/chunk-LDHZVRH4";
import "@nf-internal/chunk-C4FVYSZR";
import "@nf-internal/chunk-AY7MLMFN";
import "@nf-internal/chunk-BSWOS4VH";
import "@nf-internal/chunk-4WPE7WTU";
import "@nf-internal/chunk-VTXF2OHE";
// node_modules/@angular/material/fesm2022/select.mjs
import "@angular/cdk/a11y";
import "@angular/cdk/keycodes";
import "@angular/core";
import "@angular/cdk/platform";
import "@angular/cdk/coercion";
import "@angular/cdk/private";
import "@angular/cdk/layout";
import "@angular/cdk/bidi";
import "@angular/common";
import "rxjs/operators";
import "@angular/cdk/observers/private";
import "@angular/cdk/overlay";
import "@angular/cdk/scrolling";
import "@angular/cdk/collections";
import "@angular/forms";
import "@angular/cdk/observers";
var matSelectAnimations = {
    // Represents
    // trigger('transformPanel', [
    //   state(
    //     'void',
    //     style({
    //       opacity: 0,
    //       transform: 'scale(1, 0.8)',
    //     }),
    //   ),
    //   transition(
    //     'void => showing',
    //     animate(
    //       '120ms cubic-bezier(0, 0, 0.2, 1)',
    //       style({
    //         opacity: 1,
    //         transform: 'scale(1, 1)',
    //       }),
    //     ),
    //   ),
    //   transition('* => void', animate('100ms linear', style({opacity: 0}))),
    // ])
    /** This animation transforms the select's overlay panel on and off the page. */
    transformPanel: {
        type: 7,
        name: "transformPanel",
        definitions: [{
                type: 0,
                name: "void",
                styles: {
                    type: 6,
                    styles: {
                        opacity: 0,
                        transform: "scale(1, 0.8)"
                    },
                    offset: null
                }
            }, {
                type: 1,
                expr: "void => showing",
                animation: {
                    type: 4,
                    styles: {
                        type: 6,
                        styles: {
                            opacity: 1,
                            transform: "scale(1, 1)"
                        },
                        offset: null
                    },
                    timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
                },
                options: null
            }, {
                type: 1,
                expr: "* => void",
                animation: {
                    type: 4,
                    styles: {
                        type: 6,
                        styles: {
                            opacity: 0
                        },
                        offset: null
                    },
                    timings: "100ms linear"
                },
                options: null
            }],
        options: {}
    }
};
export { MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_TRIGGER, MatError, MatFormField, MatHint, MatLabel, MatOptgroup, MatOption, MatPrefix, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, MatSuffix, matSelectAnimations };
