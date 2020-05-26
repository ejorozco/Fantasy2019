
import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['./home.styles.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor() {
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
    }

    deleteUser(id: number) {
    }

    private loadAllUsers() {
    }
}