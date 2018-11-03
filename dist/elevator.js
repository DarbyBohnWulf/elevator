"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Elevator {
    constructor() {
        this.travelSpeed = 1000;
        this.currentFloor = 1;
        this.targetFloor = 1;
    }
    goToFloor(target) {
        this.targetFloor = target;
        let difference = this.targetFloor - this.currentFloor;
        if (difference === 0) {
            console.log('You\'re already there. ;-)');
        }
        else if (difference > 0) {
            console.log('Going up...');
            let travelTime = difference * this.travelSpeed;
            setTimeout(() => {
                this.currentFloor = target;
                console.log('We\'ve reached ' + this.targetFloor + '.\nHave a good day!');
            }, travelTime);
        }
        else if (difference < 0) {
            console.log('Going down...');
            let travelTime = difference * this.travelSpeed;
            setTimeout(() => {
                this.currentFloor = target;
                console.log('We\'ve reached ' + this.targetFloor + '.\nHave a good day!');
            }, travelTime);
        }
    }
    whichFloor() {
        return this.currentFloor;
    }
}
exports.Elevator = Elevator;
