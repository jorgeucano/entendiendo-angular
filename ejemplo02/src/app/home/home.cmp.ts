import { Component } from '@angular/core';

import { SimpleChanges } from '@angular/core';

import { Input } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.cmp.html'
})
export class HomeComponent{

    @Input() textoNuevo:string;


    changeLog = [];

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }

}