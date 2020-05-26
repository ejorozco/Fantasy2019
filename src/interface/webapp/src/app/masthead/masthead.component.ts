import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
    selector: 'masthead',
    templateUrl: 'masthead.component.html',
    styleUrls: ['./masthead.styles.scss']
})
export class MastHeadComponent implements OnInit, OnDestroy {

    constructor() {
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
    }

}